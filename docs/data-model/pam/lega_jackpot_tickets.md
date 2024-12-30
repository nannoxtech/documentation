# Table: lega_jackpot_tickets

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| id | bigint |  | false | nextval('pam.lega_jackpot_tickets_id_seq'::regclass) | lega_jackpot_tickets | lega_jackpot_tickets |
| amount | double precision |  | false |  |  |  |
| transaction_type_id | smallint |  | false |  | lega_jackpot_tickets | transaction_types |
| wallet_transaction | bigint |  | false |  |  |  |
| balance | double precision |  | false |  |  |  |
| user_id | bigint |  | false |  | lega_jackpot_tickets | users |
| currency_iso | character | 3 | false |  | lega_jackpot_tickets | currencies |
| whitelabel_id | integer |  | false |  | lega_jackpot_tickets | whitelabels |
| provider_session | character varying | 255 | false |  |  |  |
| game_id | integer |  | false |  | lega_jackpot_tickets | games |
| game_mode | character varying | 255 | false |  |  |  |
| provider_transaction_id | character varying | 255 | false |  |  |  |
| play_id | integer |  | false |  |  |  |
| created_at | timestamp without time zone |  | true |  |  |  |
| updated_at | timestamp without time zone |  | true |  |  |  |
