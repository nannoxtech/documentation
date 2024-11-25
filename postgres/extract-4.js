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

// Directories for output files
const markdownDir = path.join(__dirname, 'markdown_tables');
const jsonDir = path.join(__dirname, 'json_tables');

// Fetch table details and descriptions
async function fetchTableDetails(client, schemaName) {
  const query = `
    SELECT table_name, obj_description(('"' || table_schema || '"."' || table_name || '"')::regclass) AS table_description
    FROM information_schema.tables
    WHERE table_schema = $1
    ORDER BY table_name;
  `;

  const result = await client.query(query, [schemaName]);
  return result.rows.map(row => ({
    name: row.table_name,
    description: row.table_description || 'No description available',
  }));
}

// Fetch table structure
async function fetchTableStructure(client, schemaName, tableName) {
  const query = `
    SELECT 
      c.column_name,
      c.data_type,
      c.is_nullable = 'YES' AS nullable,
      c.character_maximum_length AS max_length,
      c.column_default,
      CASE
        WHEN tc.constraint_type = 'PRIMARY KEY' THEN $2
        ELSE NULL
      END AS is_primary_key,
      fk.referenced_table AS fk
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
    LEFT JOIN information_schema.table_constraints tc
    ON tc.table_schema = $1 AND tc.table_name = $2 AND tc.constraint_type = 'PRIMARY KEY'
    AND EXISTS (
      SELECT 1
      FROM information_schema.key_column_usage kcu
      WHERE kcu.table_schema = $1 AND kcu.table_name = $2 AND kcu.column_name = c.column_name
    )
    WHERE c.table_schema = $1 AND c.table_name = $2
    ORDER BY c.ordinal_position;
  `;

  const result = await client.query(query, [schemaName, tableName]);
  return result.rows;
}

// // Function to format column types
// function formatColumnType(dataType, maxLength, numericPrecision, numericScale) {
//   if (dataType === 'character varying') {
//     return `varchar(${maxLength || 'max'})`;
//   }
//   if (dataType === 'character') {
//     return `char(${maxLength})`;
//   }
//   if (dataType === 'numeric' || dataType === 'decimal') {
//     return `numeric(${numericPrecision || ''},${numericScale || ''})`.replace(/,\)$/, ')').replace(/\(\)/, '');
//   }
//   return dataType; // Return other data types as-is (e.g., integer, boolean)
// }

// // Fetch table structure with precise types
// async function fetchTableStructure(client, schemaName, tableName) {
//   const query = `
//     SELECT 
//       c.column_name,
//       c.data_type,
//       c.is_nullable = 'YES' AS nullable,
//       c.character_maximum_length AS max_length,
//       c.numeric_precision,
//       c.numeric_scale,
//       c.column_default,
//       CASE
//         WHEN tc.constraint_type = 'PRIMARY KEY' THEN $2
//         ELSE NULL
//       END AS is_primary_key,
//       fk.referenced_table AS fk
//     FROM information_schema.columns c
//     LEFT JOIN (
//       SELECT 
//         kcu.column_name,
//         ccu.table_name AS referenced_table
//       FROM information_schema.key_column_usage kcu
//       JOIN information_schema.constraint_column_usage ccu 
//         ON kcu.constraint_name = ccu.constraint_name
//       WHERE kcu.table_schema = $1 AND kcu.table_name = $2
//     ) fk
//     ON c.column_name = fk.column_name
//     LEFT JOIN information_schema.table_constraints tc
//     ON tc.table_schema = $1 AND tc.table_name = $2 AND tc.constraint_type = 'PRIMARY KEY'
//     AND EXISTS (
//       SELECT 1
//       FROM information_schema.key_column_usage kcu
//       WHERE kcu.table_schema = $1 AND kcu.table_name = $2 AND kcu.column_name = c.column_name
//     )
//     WHERE c.table_schema = $1 AND c.table_name = $2
//     ORDER BY c.ordinal_position;
//   `;

//   const result = await client.query(query, [schemaName, tableName]);
//   return result.rows.map(column => ({
//     column_name: column.column_name,
//     type: formatColumnType(column.data_type, column.max_length, column.numeric_precision, column.numeric_scale),
//     nullable: column.nullable,
//     maxLength: column.max_length,
//     default: column.column_default,
//     pk: column.is_primary_key,
//     fk: column.fk,
//   }));
// }


// Generate Markdown content
function generateMarkdown(tableName, tableDescription, columns) {
  let markdown = `# Table: ${tableName}\n\n`;
  markdown += `**Description**: ${tableDescription}\n\n`;
  markdown += '| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |\n';
  markdown += '|-------------|-----------|------------|-------------|---------|-------------|-------------|\n';

  columns.forEach(column => {
    markdown += `| ${column.column_name} | ${column.data_type} | ${
      column.max_length || ''
    } | ${column.nullable} | ${column.column_default || ''} | ${
      column.is_primary_key || ''
    } | ${column.fk || ''} |\n`;
  });

  return markdown;
}

// Generate JSON content
function generateJson(tableName, tableDescription, columns) {
  return {
    name: tableName,
    description: tableDescription,
    columns: columns.reduce((acc, column) => {
      acc[column.column_name] = {
        type: column.data_type,
        nullable: column.nullable,
        maxLength: column.max_length,
        default: column.column_default,
        pk: column.is_primary_key,
        fk: column.fk,
      };
      return acc;
    }, {}),
  };
}

// Export combined JSON file
function exportCombinedJson(databaseName, allTablesData, type) {
  const combinedFilePath = path.join(jsonDir, `all-${databaseName}-tables-${type}.json`);
  fs.writeFileSync(combinedFilePath, JSON.stringify(allTablesData, null, 2));
  console.log(`Combined JSON file created: ${combinedFilePath}`);
}

// Main function
// Main function
async function exportDatabaseStructure() {
  const client = new Client(config);

  try {
    // Connect to the database
    await client.connect();

    // Ensure output directories exist
    [markdownDir, jsonDir].forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
      }
    });

    console.log('Fetching table details...');
    const tables = await fetchTableDetails(client, targetSchema);

    const allTablesDataArray = [];
    const allTablesDataJson = {};

    for (const table of tables) {
      console.log(`Fetching structure for table: ${table.name}`);
      const structure = await fetchTableStructure(client, targetSchema, table.name);

      // Generate Markdown file
      // console.log(`Generating markdown for table: ${table.name}`);
      // const markdownContent = `# Table: ${table.name}\n\n**Description**: ${table.description}\n\n`;
      const markdownContent = generateMarkdown(table.name, table.description, structure);
      const markdownFilePath = path.join(markdownDir, `${table.name}.md`);
      fs.writeFileSync(markdownFilePath, markdownContent);

      // Generate JSON file
      console.log(`Generating JSON for table: ${table.name}`);
      const jsonContent = generateJson(table.name, table.description, structure);
      const jsonFilePath = path.join(jsonDir, `${table.name}.json`);
      fs.writeFileSync(jsonFilePath, JSON.stringify(jsonContent, null, 2));

      // Add to combined data
      allTablesDataArray.push(jsonContent);
      allTablesDataJson[table.name] = jsonContent;
    }

    // Export combined JSON file
    exportCombinedJson(config.database, allTablesDataArray, 'array');
    exportCombinedJson(config.database, allTablesDataJson, 'json');

    console.log(`Files generated in:\nMarkdown: ${markdownDir}\nJSON: ${jsonDir}`);
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    await client.end();
  }
}

exportDatabaseStructure();
