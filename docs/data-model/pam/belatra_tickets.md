# Table: belatra_tickets

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| id | bigint |  | false | nextval('pam.belatra_tickets_id_seq'::regclass) | belatra_tickets | belatra_tickets |
| amount | double precision |  | false |  |  |  |
| transaction_type_id | smallint |  | false |  | belatra_tickets | transaction_types |
| wallet_transaction | bigint |  | false |  |  |  |
| balance | double precision |  | false |  |  |  |
| user_id | integer |  | false |  | belatra_tickets | users |
| currency_iso | character varying | 3 | false |  | belatra_tickets | currencies |
| whitelabel_id | integer |  | false |  | belatra_tickets | whitelabels |
| game_id | integer |  | false |  | belatra_tickets | games |
| created_at | timestamp without time zone |  | true |  |  |  |
| updated_at | timestamp without time zone |  | true |  |  |  |
| provider_transaction | character varying | 255 | true |  |  |  |
| bet_type | character varying | 255 | true |  |  |  |
