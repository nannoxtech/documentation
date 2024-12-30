# Table: mascot_gaming_tickets

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| id | bigint |  | false | nextval('pam.mascot_gaming_tickets_id_seq'::regclass) | mascot_gaming_tickets | mascot_gaming_tickets |
| amount | double precision |  | false |  |  |  |
| transaction_type_id | smallint |  | false |  | mascot_gaming_tickets | transaction_types |
| wallet_transaction | bigint |  | false |  |  |  |
| balance | double precision |  | false |  |  |  |
| user_id | bigint |  | false |  | mascot_gaming_tickets | users |
| currency_iso | character | 3 | false |  | mascot_gaming_tickets | currencies |
| whitelabel_id | integer |  | false |  | mascot_gaming_tickets | whitelabels |
| game_id | integer |  | false |  | mascot_gaming_tickets | games |
| provider_transaction | character varying | 255 | false |  |  |  |
| session | character varying | 50 | false |  |  |  |
| event | integer |  | false |  |  |  |
| round | character varying | 50 | false |  |  |  |
| bet_type | character varying | 50 | false |  |  |  |
| win_type | character varying | 50 | false |  |  |  |
| rollback | boolean |  | false | false |  |  |
| created_at | timestamp without time zone |  | true |  |  |  |
| updated_at | timestamp without time zone |  | true |  |  |  |
