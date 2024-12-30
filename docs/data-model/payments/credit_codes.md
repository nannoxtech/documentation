# Table: credit_codes

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| id | bigint |  | false | nextval('payments.credit_codes_id_seq'::regclass) | credit_codes | credit_codes |
| client_account_id | bigint |  | false |  | credit_codes | client_accounts |
| code | character varying | 255 | false |  |  |  |
| amount | double precision |  | false |  |  |  |
| used | boolean |  | false |  |  |  |
| created_at | timestamp without time zone |  | true |  |  |  |
| updated_at | timestamp without time zone |  | true |  |  |  |
