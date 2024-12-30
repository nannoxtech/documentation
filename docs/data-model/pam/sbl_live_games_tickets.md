# Table: sbl_live_games_tickets

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| id | bigint |  | false | nextval('pam.sbl_live_games_tickets_id_seq'::regclass) | sbl_live_games_tickets | sbl_live_games_tickets |
| amount | double precision |  | false |  |  |  |
| transaction_type_id | smallint |  | false |  | sbl_live_games_tickets | transaction_types |
| wallet_transaction | bigint |  | false |  |  |  |
| balance | double precision |  | false |  |  |  |
| user_id | bigint |  | false |  | sbl_live_games_tickets | users |
| currency_iso | character | 3 | false |  | sbl_live_games_tickets | currencies |
| whitelabel_id | integer |  | false |  | sbl_live_games_tickets | whitelabels |
| game_id | integer |  | false |  | sbl_live_games_tickets | games |
| details | json |  | false |  |  |  |
| provider_transaction | character varying | 255 | false |  |  |  |
| created_at | timestamp without time zone |  | true |  |  |  |
| updated_at | timestamp without time zone |  | true |  |  |  |
