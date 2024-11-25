const { Client } = require('pg');
const fs = require('fs');
const path = require('path');

// Database connection configuration
const config = {
  user: 'postgres',
  host: 'localhost',
  database: 'wallet',
  password: 'postgress',
  port: 5432,
};

// Target schema
const targetSchema = 'wallet';

// Directory for markdown files
const outputDir = path.join(__dirname, 'markdown_tables');

// Function to fetch table details and descriptions
async function fetchTableDetails(client, schemaName) {
  const tablesQuery = `
    SELECT table_name, obj_description(('"' || table_schema || '"."' || table_name || '"')::regclass) AS table_description
    FROM information_schema.tables
    WHERE table_schema = $1
    ORDER BY table_name;
  `;

  const tablesResult = await client.query(tablesQuery, [schemaName]);
  return tablesResult.rows.map(row => ({
    name: row.table_name,
    description: row.table_description || '-',
  }));
}

// Function to fetch table structure
async function fetchTableStructure(client, schemaName, tableName) {
  const structureQuery = `
    SELECT
      c.column_name,
      c.data_type,
      c.is_nullable,
      c.character_maximum_length AS max_length,
      c.column_default,
      fk.referenced_table AS relation
    FROM information_schema.columns c
    LEFT JOIN (
      SELECT
        kcu.column_name,
        ccu.table_name AS referenced_table
      FROM information_schema.key_column_usage kcu
      JOIN information_schema.constraint_column_usage ccu
        ON kcu.constraint_name = ccu.constraint_name
      WHERE kcu.table_schema = $1 AND kcu.table_name = $2
    ) fk
    ON c.column_name = fk.column_name
    WHERE c.table_schema = $1 AND c.table_name = $2
    ORDER BY c.ordinal_position;
  `;

  const structureResult = await client.query(structureQuery, [schemaName, tableName]);
  return structureResult.rows;
}

// Function to generate markdown content
function generateMarkdown(tableName, tableDescription, columns) {
  let markdown = `# Table: ${tableName}\n\n`;
  markdown += `**Description**: ${tableDescription}\n\n`;
  markdown += '| Column Name | Data Type | Max Length | Is Nullable | Default | Relation |\n';
  markdown += '|-------------|-----------|------------|-------------|---------|----------|\n';

  columns.forEach(column => {
    markdown += `| ${column.column_name} | ${column.data_type} | ${column.max_length || ''
      } | ${column.is_nullable} | ${column.column_default || ''} | ${column.relation || ''
      } |\n`;
  });

  return markdown;
}

// Main function
async function exportDatabaseStructure() {
  const client = new Client(config);

  try {
    // Connect to the database
    await client.connect();

    // Ensure output directory exists
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir);
    }

    console.log('Fetching table details...');
    const tables = await fetchTableDetails(client, targetSchema);

    for (const table of tables) {
      console.log(`Fetching structure for table: ${table.name}`);
      const structure = await fetchTableStructure(client, targetSchema, table.name);

      console.log(`Generating markdown for table: ${table.name}`);
      const markdownContent = generateMarkdown(table.name, table.description, structure);

      const filePath = path.join(outputDir, `${table.name}.md`);
      fs.writeFileSync(filePath, markdownContent);
    }

    console.log(`Markdown files generated in: ${outputDir}`);
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    await client.end();
  }
}

exportDatabaseStructure();
