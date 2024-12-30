# Table: operational_balance_transactions

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| id | bigint |  | false | nextval('pam.operational_balance_transactions_id_seq'::regclass) | operational_balance_transactions | operational_balance_transactions |
| amount | double precision |  | false |  |  |  |
| user_id | bigint |  | true |  | operational_balance_transactions | users |
| operator | character varying | 25 | false |  |  |  |
| provider_id | smallint |  | false |  | operational_balance_transactions | providers |
| whitelabel_id | integer |  | false |  | operational_balance_transactions | whitelabels |
| currency_iso | character | 3 | false |  | operational_balance_transactions | currencies |
| transaction_type_id | smallint |  | false |  | operational_balance_transactions | transaction_types |
| created_at | timestamp without time zone |  | true |  |  |  |
| updated_at | timestamp without time zone |  | true |  |  |  |
