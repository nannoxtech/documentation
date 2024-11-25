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

// Function to fetch table details
async function fetchTableDetails(client, schemaName) {
  const tablesQuery = `
    SELECT table_name
    FROM information_schema.tables
    WHERE table_schema = $1
    ORDER BY table_name;
  `;

  const tablesResult = await client.query(tablesQuery, [schemaName]);
  return tablesResult.rows.map(row => row.table_name);
}

// Function to fetch table structure
async function fetchTableStructure(client, schemaName, tableName) {
  const structureQuery = `
    SELECT column_name, data_type, is_nullable, column_default
    FROM information_schema.columns
    WHERE table_schema = $1 AND table_name = $2
    ORDER BY ordinal_position;
  `;

  const structureResult = await client.query(structureQuery, [schemaName, tableName]);
  return structureResult.rows;
}

// Function to generate markdown content
function generateMarkdown(tableName, columns) {
  let markdown = `# Table: ${tableName}\n\n`;
  markdown += '| Column Name | Data Type | Is Nullable | Default |\n';
  markdown += '|-------------|-----------|-------------|---------|\n';

  columns.forEach(column => {
    markdown += `| ${column.column_name} | ${column.data_type} | ${column.is_nullable} | ${column.column_default || ''} |\n`;
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
      console.log(`Fetching structure for table: ${table}`);
      const structure = await fetchTableStructure(client, targetSchema, table);

      console.log(`Generating markdown for table: ${table}`);
      const markdownContent = generateMarkdown(table, structure);

      const filePath = path.join(outputDir, `${table}.md`);
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
