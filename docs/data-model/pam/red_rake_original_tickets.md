# Table: red_rake_original_tickets

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| id | bigint |  | false | nextval('pam.red_rake_original_tickets_id_seq'::regclass) | red_rake_original_tickets | red_rake_original_tickets |
| amount | double precision |  | false |  |  |  |
| transaction_type_id | smallint |  | false |  | red_rake_original_tickets | transaction_types |
| wallet_transaction | bigint |  | false |  |  |  |
| balance | double precision |  | false |  |  |  |
| user_id | bigint |  | false |  | red_rake_original_tickets | users |
| currency_iso | character | 3 | false |  | red_rake_original_tickets | currencies |
| whitelabel_id | integer |  | false |  | red_rake_original_tickets | whitelabels |
| game_id | integer |  | false |  | red_rake_original_tickets | games |
| provider_transaction | bigint |  | false |  |  |  |
| type | character varying | 20 | false |  |  |  |
| round | bigint |  | false |  |  |  |
| round_finished | boolean |  | false |  |  |  |
| history | text |  | false |  |  |  |
| created_at | timestamp without time zone |  | true |  |  |  |
| updated_at | timestamp without time zone |  | true |  |  |  |
