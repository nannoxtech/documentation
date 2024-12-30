# Table: dotsuite_tickets

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| id | bigint |  | false | nextval('pam.dotsuite_tickets_id_seq'::regclass) | dotsuite_tickets | dotsuite_tickets |
| amount | double precision |  | false |  |  |  |
| transaction_type_id | smallint |  | false |  |  |  |
| wallet_transaction | bigint |  | false |  |  |  |
| balance | double precision |  | false |  |  |  |
| user_id | bigint |  | false |  | dotsuite_tickets | users |
| currency_iso | character | 3 | false |  | dotsuite_tickets | currencies |
| whitelabel_id | integer |  | false |  | dotsuite_tickets | whitelabels |
| provider_id | integer |  | false |  | dotsuite_tickets | providers |
| provider | character varying | 255 | true |  |  |  |
| type | character varying | 255 | false |  |  |  |
| extra_data | json |  | true |  |  |  |
| dotsuite_game_id | integer |  | false |  | dotsuite_tickets | dotsuite_games |
| round | character varying | 255 | true |  |  |  |
| created_at | timestamp without time zone |  | true |  |  |  |
| updated_at | timestamp without time zone |  | true |  |  |  |
| real_amount | double precision |  | true |  |  |  |
| bonus_amount | double precision |  | true |  |  |  |
| status | integer |  | false | 1 |  |  |
| provider_transaction | character varying | 255 | true |  |  |  |
