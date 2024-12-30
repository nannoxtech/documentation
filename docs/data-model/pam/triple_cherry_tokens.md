# Table: triple_cherry_tokens

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| id | bigint |  | false | nextval('pam.triple_cherry_tokens_id_seq'::regclass) | triple_cherry_tokens | triple_cherry_tokens |
| wallet_id | integer |  | false |  |  |  |
| token | character varying | 255 | false |  |  |  |
| expires_at | timestamp without time zone |  | false |  |  |  |
| created_at | timestamp without time zone |  | true |  |  |  |
| updated_at | timestamp without time zone |  | true |  |  |  |
