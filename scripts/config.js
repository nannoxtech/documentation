
export const MARKDOWN_DIR = "markdown_tables";

export const JSON_DIR = "json_tables";

export const DATABASE_CONFIG = [
  {
    mdDirName: "wallet",
    jsonDirName: "wallet",
    host: 'localhost',
    database: 'wallet',
    schema: "wallet",
    port: 5432,
    user: 'postgres',
    password: 'postgres',
  },
  {
    mdDirName: "pam",
    jsonDirName: "pam",
    host: 'localhost',
    database: 'pam',
    schema: "pam",
    port: 5432,
    user: 'postgres',
    password: 'postgres',
  },
  {
    mdDirName: "payments",
    jsonDirName: "payments",
    host: 'localhost',
    database: 'payments',
    schema: "payments",
    port: 5432,
    user: 'postgres',
    password: 'postgres',
  },
]