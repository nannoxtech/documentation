# Table: salsa_gaming_tickets

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| id | bigint |  | false | nextval('pam.salsa_gaming_tickets_id_seq'::regclass) | salsa_gaming_tickets | salsa_gaming_tickets |
| amount | double precision |  | false |  |  |  |
| transaction_type_id | smallint |  | false |  | salsa_gaming_tickets | transaction_types |
| wallet_transaction | bigint |  | false |  |  |  |
| balance | double precision |  | false |  |  |  |
| user_id | bigint |  | false |  | salsa_gaming_tickets | users |
| currency_iso | character | 3 | false |  | salsa_gaming_tickets | currencies |
| whitelabel_id | integer |  | false |  | salsa_gaming_tickets | whitelabels |
| game_id | integer |  | false |  | salsa_gaming_tickets | games |
| created_at | timestamp without time zone |  | true |  |  |  |
| updated_at | timestamp without time zone |  | true |  |  |  |
| provider_transaction | bigint |  | false |  |  |  |
| reference | bigint |  | false |  |  |  |
| refund | boolean |  | false |  |  |  |
| provider_id | smallint |  | true |  | salsa_gaming_tickets | providers |
