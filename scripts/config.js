const { join } = require('path');

const MARKDOWN_DIR = join(__dirname, "../docs/data-model");

const JSON_DIR = join(__dirname, "json");

const DATABASES_CONFIG = [
  {
    mdDirName: "wallet",
    jsonDirName: "wallet",
    host: 'localhost',
    database: 'wallet',
    schema: "wallet",
    port: 5432,
    user: 'postgres',
    password: 'postgress',
    extraInfoFileName: "wallet.json"
  },
  {
    mdDirName: "pam",
    jsonDirName: "pam",
    host: 'localhost',
    database: 'pam',
    schema: "pam",
    port: 5432,
    user: 'postgres',
    password: 'postgress',
    extraInfoFileName: "pam.json"
  },
  {
    mdDirName: "payments",
    jsonDirName: "payments",
    host: 'localhost',
    database: 'payments',
    schema: "payments",
    port: 5432,
    user: 'postgres',
    password: 'postgress',
    extraInfoFileName: "payments.json"
  },
];

module.exports = {
  DATABASES_CONFIG,
  JSON_DIR,
  MARKDOWN_DIR
};