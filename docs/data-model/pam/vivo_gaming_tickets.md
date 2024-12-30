# Table: vivo_gaming_tickets

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| id | bigint |  | false | nextval('pam.vivo_gaming_tickets_id_seq'::regclass) | vivo_gaming_tickets | vivo_gaming_tickets |
| amount | double precision |  | false |  |  |  |
| transaction_type_id | smallint |  | false |  | vivo_gaming_tickets | transaction_types |
| wallet_transaction | bigint |  | false |  |  |  |
| balance | double precision |  | false |  |  |  |
| user_id | bigint |  | false |  | vivo_gaming_tickets | users |
| currency_iso | character | 3 | false |  | vivo_gaming_tickets | currencies |
| whitelabel_id | integer |  | false |  | vivo_gaming_tickets | whitelabels |
| game_id | integer |  | false |  | vivo_gaming_tickets | games |
| provider_transaction | bigint |  | false |  |  |  |
| type | character varying | 20 | false |  |  |  |
| round | bigint |  | false |  |  |  |
| round_finished | boolean |  | false |  |  |  |
| history | text |  | false |  |  |  |
| created_at | timestamp without time zone |  | true |  |  |  |
| updated_at | timestamp without time zone |  | true |  |  |  |
