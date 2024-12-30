# Table: user_documents

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| id | bigint |  | false | nextval('pam.user_documents_id_seq'::regclass) | user_documents | user_documents |
| name | character varying | 255 | false |  |  |  |
| status | smallint |  | false |  |  |  |
| user_id | integer |  | false |  | user_documents | users |
| whitelabel_id | integer |  | false |  | user_documents | whitelabels |
| created_at | timestamp without time zone |  | true |  |  |  |
| updated_at | timestamp without time zone |  | true |  |  |  |
| document_id | smallint |  | true |  | user_documents | documents |
