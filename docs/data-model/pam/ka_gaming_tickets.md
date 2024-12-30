# Table: ka_gaming_tickets

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| id | bigint |  | false | nextval('pam.ka_gaming_tickets_id_seq'::regclass) | ka_gaming_tickets | ka_gaming_tickets |
| amount | double precision |  | false |  |  |  |
| transaction_type_id | smallint |  | false |  | ka_gaming_tickets | transaction_types |
| wallet_transaction | bigint |  | false |  |  |  |
| balance | double precision |  | false |  |  |  |
| user_id | bigint |  | false |  | ka_gaming_tickets | users |
| game_id | bigint |  | false |  | ka_gaming_tickets | games |
| currency_iso | character | 3 | false |  | ka_gaming_tickets | currencies |
| whitelabel_id | integer |  | false |  | ka_gaming_tickets | whitelabels |
| provider_transaction | character varying | 255 | false |  |  |  |
| round | integer |  | false |  |  |  |
| created_at | timestamp without time zone |  | true |  |  |  |
| updated_at | timestamp without time zone |  | true |  |  |  |
