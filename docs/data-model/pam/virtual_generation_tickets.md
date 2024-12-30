# Table: virtual_generation_tickets

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| id | bigint |  | false | nextval('pam.virtual_generation_tickets_id_seq'::regclass) | virtual_generation_tickets | virtual_generation_tickets |
| amount | double precision |  | false |  |  |  |
| transaction_type_id | smallint |  | false |  | virtual_generation_tickets | transaction_types |
| wallet_transaction | bigint |  | false |  |  |  |
| balance | double precision |  | false |  |  |  |
| user_id | integer |  | false |  | virtual_generation_tickets | users |
| currency_iso | character varying | 3 | false |  | virtual_generation_tickets | currencies |
| whitelabel_id | integer |  | false |  | virtual_generation_tickets | whitelabels |
| game_id | integer |  | false |  | virtual_generation_tickets | games |
| created_at | timestamp without time zone |  | true |  |  |  |
| updated_at | timestamp without time zone |  | true |  |  |  |
| transaction_id | character varying | 100 | false |  |  |  |
| coupon_code | character varying | 100 | false |  |  |  |
| token | character varying | 100 | false |  |  |  |
| bet_type | character varying | 10 | false |  |  |  |
