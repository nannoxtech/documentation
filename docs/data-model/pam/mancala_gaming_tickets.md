# Table: mancala_gaming_tickets

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| id | bigint |  | false | nextval('pam.mancala_gaming_tickets_id_seq'::regclass) | mancala_gaming_tickets | mancala_gaming_tickets |
| amount | double precision |  | false |  |  |  |
| transaction_type_id | smallint |  | false |  | mancala_gaming_tickets | transaction_types |
| wallet_transaction | bigint |  | false |  |  |  |
| balance | double precision |  | false |  |  |  |
| user_id | bigint |  | false |  | mancala_gaming_tickets | users |
| currency_iso | character | 255 | false |  | mancala_gaming_tickets | currencies |
| whitelabel_id | integer |  | false |  | mancala_gaming_tickets | whitelabels |
| game_id | integer |  | false |  | mancala_gaming_tickets | games |
| round | integer |  | false |  |  |  |
| provider_transaction | bigint |  | false |  |  |  |
| created_at | timestamp without time zone |  | true |  |  |  |
| updated_at | timestamp without time zone |  | true |  |  |  |
