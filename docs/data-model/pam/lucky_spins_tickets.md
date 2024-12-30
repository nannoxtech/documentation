# Table: lucky_spins_tickets

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| id | bigint |  | false | nextval('pam.lucky_spins_tickets_id_seq'::regclass) | lucky_spins_tickets | lucky_spins_tickets |
| amount | double precision |  | false |  |  |  |
| transaction_type_id | smallint |  | false |  | lucky_spins_tickets | transaction_types |
| wallet_transaction | bigint |  | false |  |  |  |
| balance | double precision |  | false |  |  |  |
| user_id | integer |  | false |  | lucky_spins_tickets | users |
| currency_iso | character varying | 3 | false |  | lucky_spins_tickets | currencies |
| whitelabel_id | integer |  | false |  | lucky_spins_tickets | whitelabels |
| game_id | integer |  | false |  | lucky_spins_tickets | games |
| created_at | timestamp without time zone |  | true |  |  |  |
| updated_at | timestamp without time zone |  | true |  |  |  |
| round_id | integer |  | false |  |  |  |
| bet_id | character varying | 32 | false |  |  |  |
| win_id | character varying | 32 | true |  |  |  |
| token | character varying | 32 | false |  |  |  |
| bet_transaction_id | character varying | 255 | true |  |  |  |
| type | character varying | 10 | false |  |  |  |
