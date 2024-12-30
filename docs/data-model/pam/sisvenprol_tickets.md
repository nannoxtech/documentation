# Table: sisvenprol_tickets

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| id | bigint |  | false | nextval('pam.sisvenprol_tickets_id_seq'::regclass) | sisvenprol_tickets | sisvenprol_tickets |
| amount | double precision |  | false |  |  |  |
| user_id | integer |  | false |  | sisvenprol_tickets | users |
| game_id | integer |  | false |  | sisvenprol_tickets | games |
| transaction_type_id | smallint |  | false |  | sisvenprol_tickets | transaction_types |
| wallet_transaction | bigint |  | false |  |  |  |
| balance | double precision |  | false |  |  |  |
| currency_iso | character | 3 | false |  | sisvenprol_tickets | currencies |
| whitelabel_id | integer |  | false |  | sisvenprol_tickets | whitelabels |
| draw_id | integer |  | false |  |  |  |
| draw_date | date |  | false |  |  |  |
| ticket | integer |  | false |  |  |  |
| created_at | timestamp without time zone |  | true |  |  |  |
| updated_at | timestamp without time zone |  | true |  |  |  |
