# Table: pages

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| id | smallint |  | false | nextval('pam.pages_id_seq'::regclass) | pages | pages |
| name | character varying | 50 | false |  |  |  |
| slug | character varying | 255 | false |  |  |  |
| created_at | timestamp without time zone |  | true |  |  |  |
| updated_at | timestamp without time zone |  | true |  |  |  |
