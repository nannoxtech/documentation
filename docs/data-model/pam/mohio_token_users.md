# Table: mohio_token_users

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| id | bigint |  | false | nextval('pam.mohio_token_users_id_seq'::regclass) | mohio_token_users | mohio_token_users |
| token | character varying | 255 | false |  |  |  |
| type | integer |  | false |  |  |  |
| status | boolean |  | false | true |  |  |
| created_at | timestamp without time zone |  | true |  |  |  |
| updated_at | timestamp without time zone |  | true |  |  |  |
| wallet_id | bigint |  | true |  |  |  |
