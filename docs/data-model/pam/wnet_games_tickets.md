# Table: wnet_games_tickets

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| id | bigint |  | false | nextval('pam.wnet_games_tickets_id_seq'::regclass) | wnet_games_tickets | wnet_games_tickets |
| amount | double precision |  | false |  |  |  |
| transaction_type_id | smallint |  | false |  | wnet_games_tickets | transaction_types |
| wallet_transaction | bigint |  | false |  |  |  |
| balance | double precision |  | false |  |  |  |
| user_id | integer |  | false |  | wnet_games_tickets | users |
| currency_iso | character varying | 3 | false |  | wnet_games_tickets | currencies |
| whitelabel_id | integer |  | false |  | wnet_games_tickets | whitelabels |
| game_id | integer |  | false |  | wnet_games_tickets | games |
| created_at | timestamp without time zone |  | true |  |  |  |
| updated_at | timestamp without time zone |  | true |  |  |  |
| bet_id | character varying | 100 | false |  |  |  |
| session_id | character varying | 100 | false |  |  |  |
| transaction_id | character varying | 10 | false |  |  |  |
| bet_type | character varying | 10 | false |  |  |  |
