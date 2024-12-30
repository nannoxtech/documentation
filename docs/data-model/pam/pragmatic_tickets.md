# Table: pragmatic_tickets

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| id | bigint |  | false | nextval('pam.pragmatic_tickets_id_seq'::regclass) | pragmatic_tickets | pragmatic_tickets |
| amount | double precision |  | false |  |  |  |
| transaction_type_id | smallint |  | false |  | pragmatic_tickets | transaction_types |
| wallet_transaction | bigint |  | false |  |  |  |
| balance | double precision |  | false |  |  |  |
| user_id | bigint |  | false |  | pragmatic_tickets | users |
| currency_iso | character | 3 | false |  | pragmatic_tickets | currencies |
| whitelabel_id | integer |  | false |  | pragmatic_tickets | whitelabels |
| game_id | integer |  | false |  | pragmatic_tickets | games |
| provider_transaction | character varying | 255 | false |  |  |  |
| round | character varying | 255 | false |  |  |  |
| rollback | boolean |  | false |  |  |  |
| created_at | timestamp without time zone |  | true |  |  |  |
| updated_at | timestamp without time zone |  | true |  |  |  |
| provider_id | integer |  | true |  | pragmatic_tickets | providers |
