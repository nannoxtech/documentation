# Table: 123pago_transactions

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| id | bigint |  | false | nextval('payments."123pago_transactions_id_seq"'::regclass) | 123pago_transactions | 123pago_transactions |
| amount | double precision |  | false |  |  |  |
| currency_iso | character | 3 | false |  | 123pago_transactions | currencies |
| user_id | bigint |  | false |  | 123pago_transactions | users |
| transaction_type_id | smallint |  | false |  | 123pago_transactions | transaction_types |
| client_account_id | bigint |  | true |  | 123pago_transactions | client_accounts |
| created_at | timestamp without time zone |  | true |  |  |  |
| updated_at | timestamp without time zone |  | true |  |  |  |
