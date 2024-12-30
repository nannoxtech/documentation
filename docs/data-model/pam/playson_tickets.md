# Table: playson_tickets

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| id | bigint |  | false | nextval('pam.playson_tickets_id_seq'::regclass) | playson_tickets | playson_tickets |
| amount | double precision |  | false |  |  |  |
| transaction_type_id | smallint |  | false |  | playson_tickets | transaction_types |
| wallet_transaction | bigint |  | false |  |  |  |
| balance | double precision |  | false |  |  |  |
| user_id | bigint |  | false |  | playson_tickets | users |
| game_id | bigint |  | false |  | playson_tickets | games |
| currency_iso | character | 3 | false |  | playson_tickets | currencies |
| whitelabel_id | integer |  | false |  | playson_tickets | whitelabels |
| provider_id | integer |  | false |  |  |  |
| created_at | timestamp without time zone |  | true |  |  |  |
| updated_at | timestamp without time zone |  | true |  |  |  |
| provider_transaction | integer |  | true |  |  |  |
