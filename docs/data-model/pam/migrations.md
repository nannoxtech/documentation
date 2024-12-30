# Table: migrations

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| id | integer |  | false | nextval('pam.migrations_id_seq'::regclass) | migrations | migrations |
| migration | character varying | 255 | false |  |  |  |
| batch | integer |  | false |  |  |  |
