# Table: triple_cherry_tickets

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| id | bigint |  | false | nextval('pam.triple_cherry_tickets_id_seq'::regclass) | triple_cherry_tickets | triple_cherry_tickets |
| amount | double precision |  | false |  |  |  |
| transaction_type_id | smallint |  | false |  | triple_cherry_tickets | transaction_types |
| wallet_transaction | bigint |  | false |  |  |  |
| balance | double precision |  | false |  |  |  |
| user_id | bigint |  | false |  | triple_cherry_tickets | users |
| currency_iso | character | 3 | false |  | triple_cherry_tickets | currencies |
| whitelabel_id | integer |  | false |  | triple_cherry_tickets | whitelabels |
| game_id | integer |  | false |  | triple_cherry_tickets | games |
| provider_transaction | uuid |  | false |  |  |  |
| bet_type | character varying | 255 | false |  |  |  |
| created_at | timestamp without time zone |  | true |  |  |  |
| updated_at | timestamp without time zone |  | true |  |  |  |
