# Table: center_horses_tickets

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| id | bigint |  | false | nextval('pam.center_horses_tickets_id_seq'::regclass) | center_horses_tickets | center_horses_tickets |
| amount | double precision |  | false |  |  |  |
| transaction_type_id | smallint |  | false |  | center_horses_tickets | transaction_types |
| wallet_transaction | bigint |  | false |  |  |  |
| balance | double precision |  | false |  |  |  |
| user_id | bigint |  | false |  | center_horses_tickets | users |
| currency_iso | character | 3 | false |  | center_horses_tickets | currencies |
| whitelabel_id | integer |  | false |  | center_horses_tickets | whitelabels |
| ticket | character varying | 255 | false |  |  |  |
| bet_type | character varying | 20 | false |  |  |  |
| created_at | timestamp without time zone |  | true |  |  |  |
| updated_at | timestamp without time zone |  | true |  |  |  |
