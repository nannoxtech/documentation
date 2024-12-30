# Table: golden_race_tickets

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| id | bigint |  | false | nextval('pam.golden_race_tickets_id_seq'::regclass) | golden_race_tickets | golden_race_tickets |
| amount | double precision |  | false |  |  |  |
| transaction_type_id | smallint |  | false |  | golden_race_tickets | transaction_types |
| wallet_transaction | bigint |  | false |  |  |  |
| balance | double precision |  | false |  |  |  |
| user_id | integer |  | false |  | golden_race_tickets | users |
| currency_iso | character varying | 3 | false |  | golden_race_tickets | currencies |
| whitelabel_id | integer |  | false |  | golden_race_tickets | whitelabels |
| game_id | integer |  | false |  | golden_race_tickets | games |
| created_at | timestamp without time zone |  | true |  |  |  |
| updated_at | timestamp without time zone |  | true |  |  |  |
| transaction_id | character varying | 200 | false |  |  |  |
| request_id | character varying | 200 | false |  |  |  |
| token | character varying | 200 | false |  |  |  |
| bet_type | character varying | 10 | false |  |  |  |
| game_cycle | character varying | 200 | false |  |  |  |
| game_cycle_closed | boolean |  | false | false |  |  |
