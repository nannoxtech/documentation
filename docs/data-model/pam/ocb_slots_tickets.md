# Table: ocb_slots_tickets

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| id | bigint |  | false | nextval('pam.ocb_slots_tickets_id_seq'::regclass) | ocb_slots_tickets | ocb_slots_tickets |
| amount | double precision |  | false |  |  |  |
| transaction_type_id | smallint |  | false |  | ocb_slots_tickets | transaction_types |
| wallet_transaction | bigint |  | false |  |  |  |
| balance | double precision |  | false |  |  |  |
| user_id | bigint |  | false |  | ocb_slots_tickets | users |
| currency_iso | character | 3 | false |  | ocb_slots_tickets | currencies |
| whitelabel_id | integer |  | false |  | ocb_slots_tickets | whitelabels |
| game_id | integer |  | false |  | ocb_slots_tickets | games |
| provider_transaction | character varying | 255 | false |  |  |  |
| session | character varying | 50 | false |  |  |  |
| event | bigint |  | false |  |  |  |
| round | character varying | 50 | false |  |  |  |
| bet_type | character varying | 50 | false |  |  |  |
| win_type | character varying | 50 | false |  |  |  |
| created_at | timestamp without time zone |  | true |  |  |  |
| updated_at | timestamp without time zone |  | true |  |  |  |
| rollback | boolean |  | false | false |  |  |