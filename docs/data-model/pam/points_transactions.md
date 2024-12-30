# Table: points_transactions

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| id | bigint |  | false | nextval('pam.points_transactions_id_seq'::regclass) | points_transactions | points_transactions |
| points_wallet_id | bigint |  | false |  | points_transactions | points_wallets |
| amount | double precision |  | false |  |  |  |
| balance | double precision |  | false |  |  |  |
| provider_id | smallint |  | false |  |  |  |
| transaction_type_id | smallint |  | false |  | points_transactions | transaction_types |
| currency_iso | character | 3 | false |  | points_transactions | currencies |
| whitelabel_id | integer |  | false |  | points_transactions | whitelabels |
| created_at | timestamp without time zone |  | true |  |  |  |
| updated_at | timestamp without time zone |  | true |  |  |  |
| provider_transaction | character varying | 255 | true |  |  |  |
