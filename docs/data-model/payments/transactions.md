# Table: transactions

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| id | bigint |  | false | nextval('payments.transactions_id_seq'::regclass) | transactions | transactions |
| user_id | bigint |  | false |  |  |  |
| amount | double precision |  | false |  |  |  |
| currency_iso | character | 3 | false |  |  |  |
| user_account_id | bigint |  | false |  |  |  |
| client_account_id | bigint |  | false |  |  |  |
| transaction_type_id | smallint |  | false |  |  |  |
| transaction_status_id | smallint |  | false |  |  |  |
| data | json |  | false |  |  |  |
| payment_method_id | smallint |  | false |  |  |  |
| reference | character varying | 255 | false |  |  |  |
| created_at | timestamp with time zone |  | false | now() |  |  |
| updated_at | timestamp with time zone |  | false | now() |  |  |
