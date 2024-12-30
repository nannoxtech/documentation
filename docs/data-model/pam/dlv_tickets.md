# Table: dlv_tickets

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| id | bigint |  | false | nextval('pam.dlv_tickets_id_seq'::regclass) | dlv_tickets | dlv_tickets |
| amount | double precision |  | false |  |  |  |
| transaction_type_id | smallint |  | false |  | dlv_tickets | transaction_types |
| wallet_transaction | bigint |  | false |  |  |  |
| balance | double precision |  | false |  |  |  |
| user_id | integer |  | false |  | dlv_tickets | users |
| currency_iso | character | 3 | false |  | dlv_tickets | currencies |
| whitelabel_id | integer |  | false |  | dlv_tickets | whitelabels |
| game_id | integer |  | false |  | dlv_tickets | games |
| created_at | timestamp without time zone |  | true |  |  |  |
| updated_at | timestamp without time zone |  | true |  |  |  |
| provider_transaction | integer |  | false |  |  |  |
| round_id | character varying | 255 | false |  |  |  |
| type | integer |  | false |  |  |  |
