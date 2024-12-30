# Table: tvbet_tickets

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| id | bigint |  | false | nextval('pam.tvbet_tickets_id_seq'::regclass) | tvbet_tickets | tvbet_tickets |
| amount | double precision |  | false |  |  |  |
| transaction_type_id | smallint |  | false |  | tvbet_tickets | transaction_types |
| wallet_transaction | bigint |  | false |  |  |  |
| balance | double precision |  | false |  |  |  |
| user_id | integer |  | false |  | tvbet_tickets | users |
| currency_iso | character | 3 | false |  | tvbet_tickets | currencies |
| whitelabel_id | integer |  | false |  | tvbet_tickets | whitelabels |
| created_at | timestamp without time zone |  | true |  |  |  |
| updated_at | timestamp without time zone |  | true |  |  |  |
| bet_id | bigint |  | false |  |  |  |
| type | integer |  | false |  |  |  |
