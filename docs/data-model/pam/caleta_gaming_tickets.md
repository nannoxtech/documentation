# Table: caleta_gaming_tickets

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| id | bigint |  | false | nextval('pam.caleta_gaming_tickets_id_seq'::regclass) | caleta_gaming_tickets | caleta_gaming_tickets |
| amount | double precision |  | false |  |  |  |
| transaction_type_id | smallint |  | false |  | caleta_gaming_tickets | transaction_types |
| wallet_transaction | bigint |  | false |  |  |  |
| balance | double precision |  | false |  |  |  |
| user_id | integer |  | false |  | caleta_gaming_tickets | users |
| currency_iso | character varying | 3 | false |  | caleta_gaming_tickets | currencies |
| whitelabel_id | integer |  | false |  | caleta_gaming_tickets | whitelabels |
| game_id | integer |  | false |  | caleta_gaming_tickets | games |
| rollback | boolean |  | false |  |  |  |
| type | character varying | 10 | false |  |  |  |
| created_at | timestamp without time zone |  | true |  |  |  |
| updated_at | timestamp without time zone |  | true |  |  |  |
| round | character varying | 255 | false |  |  |  |
| provider_transaction | uuid |  | false |  |  |  |
| bet_description | character varying | 255 | true |  |  |  |
| round_closed | boolean |  | false |  |  |  |
| free | boolean |  | false |  |  |  |
