# Table: transactions

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| id | bigint |  | false | nextval('wallet.transactions_id_seq'::regclass) | transactions | transactions |
| wallet_id | bigint |  | false |  | transactions | wallets |
| amount | double precision |  | false |  |  |  |
| balance | double precision |  | false |  |  |  |
| provider_id | smallint |  | false |  |  |  |
| transaction_type_id | smallint |  | false |  | transactions | transaction_types |
| action_id | smallint |  | false |  | transactions | actions |
| currency_iso | character varying | 3 | false |  | transactions | currencies |
| data | json |  | true |  |  |  |
| created_at | timestamp without time zone |  | false |  |  |  |
| updated_at | timestamp without time zone |  | true |  |  |  |
| provider_transaction | character varying | 255 | true |  |  |  |
| external_provider_id | integer |  | true |  |  |  |
| balances | json |  | true |  |  |  |
