const { fetchAndExportDBInfo } = require('./fetchAndExportDBInfo');
const { DATABASES_CONFIG, JSON_DIR, MARKDOWN_DIR } = require('./config');


// Directories for output files
// const markdownDir = join(__dirname, 'markdown_tables');
// const jsonDir = join(__dirname, 'json_tables');

// Main function
const main = async () => {
  for (const dbConfig of DATABASES_CONFIG) {
    await fetchAndExportDBInfo(dbConfig, MARKDOWN_DIR, JSON_DIR);
  }
}

main();
