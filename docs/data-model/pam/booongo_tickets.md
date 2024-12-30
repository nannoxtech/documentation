# Table: booongo_tickets

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| id | bigint |  | false | nextval('pam.booongo_tickets_id_seq'::regclass) | booongo_tickets | booongo_tickets |
| amount | double precision |  | false |  |  |  |
| transaction_type_id | smallint |  | false |  | booongo_tickets | transaction_types |
| wallet_transaction | bigint |  | false |  |  |  |
| balance | double precision |  | false |  |  |  |
| user_id | bigint |  | false |  | booongo_tickets | users |
| currency_iso | character | 3 | false |  | booongo_tickets | currencies |
| whitelabel_id | integer |  | false |  | booongo_tickets | whitelabels |
| game_id | integer |  | false |  | booongo_tickets | games |
| round | character varying | 255 | false |  |  |  |
| provider_transaction | character varying | 255 | false |  |  |  |
| version | bigint |  | false |  |  |  |
| rollback | boolean |  | false |  |  |  |
| created_at | timestamp without time zone |  | true |  |  |  |
| updated_at | timestamp without time zone |  | true |  |  |  |
