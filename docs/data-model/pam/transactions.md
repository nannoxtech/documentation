# Table: transactions

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| id | bigint |  | false | nextval('pam.transactions_id_seq'::regclass) | transactions | transactions |
| user_id | bigint |  | false |  | transactions | users |
| amount | double precision |  | false |  |  |  |
| currency_iso | character | 3 | false |  | transactions | currencies |
| transaction_type_id | smallint |  | false |  | transactions | transaction_types |
| transaction_status_id | smallint |  | false |  | transactions | transaction_status |
| provider_id | smallint |  | false |  | transactions | providers |
| data | json |  | true |  |  |  |
| created_at | timestamp without time zone |  | true |  |  |  |
| updated_at | timestamp without time zone |  | true |  |  |  |
| whitelabel_id | integer |  | true |  | transactions | whitelabels |
| payment_method_id | integer |  | true |  |  |  |
| provider_transaction | character varying | 255 | true |  |  |  |
