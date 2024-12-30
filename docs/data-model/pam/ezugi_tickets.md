# Table: ezugi_tickets

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| id | bigint |  | false | nextval('pam.ezugi_tickets_id_seq'::regclass) | ezugi_tickets | ezugi_tickets |
| amount | double precision |  | false |  |  |  |
| transaction_type_id | smallint |  | false |  | ezugi_tickets | transaction_types |
| wallet_transaction | bigint |  | false |  |  |  |
| balance | double precision |  | false |  |  |  |
| user_id | bigint |  | false |  | ezugi_tickets | users |
| currency_iso | character | 3 | false |  | ezugi_tickets | currencies |
| whitelabel_id | integer |  | false |  | ezugi_tickets | whitelabels |
| provider_transaction | character varying | 50 | false |  |  |  |
| token | uuid |  | false |  |  |  |
| bet_type | smallint |  | false |  |  |  |
| table_id | integer |  | false |  |  |  |
| seat_id | character varying | 50 | true |  |  |  |
| round_id | bigint |  | false |  |  |  |
| platform_id | smallint |  | false |  |  |  |
| debit_transaction_id | character varying | 50 | true |  |  |  |
| created_at | timestamp without time zone |  | true |  |  |  |
| updated_at | timestamp without time zone |  | true |  |  |  |
