# Table: store_transactions

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| id | bigint |  | false | nextval('pam.store_transactions_id_seq'::regclass) | store_transactions | store_transactions |
| points_wallet_id | bigint |  | false |  |  |  |
| amount | double precision |  | false |  |  |  |
| balance | double precision |  | false |  |  |  |
| provider_id | smallint |  | false |  |  |  |
| transaction_type_id | smallint |  | false |  | store_transactions | transaction_types |
| currency_iso | character | 3 | false |  | store_transactions | currencies |
| whitelabel_id | integer |  | false |  | store_transactions | whitelabels |
| user_id | bigint |  | false |  | store_transactions | users |
| data | json |  | true |  |  |  |
| created_at | timestamp without time zone |  | true |  |  |  |
| updated_at | timestamp without time zone |  | true |  |  |  |
| provider_transaction | character varying | 255 | true |  |  |  |
