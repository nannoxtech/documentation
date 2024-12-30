# Table: vls_tickets

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| id | bigint |  | false | nextval('pam.vls_tickets_id_seq'::regclass) | vls_tickets | vls_tickets |
| amount | double precision |  | false |  |  |  |
| transaction_type_id | smallint |  | false |  | vls_tickets | transaction_types |
| wallet_transaction | bigint |  | false |  |  |  |
| balance | double precision |  | false |  |  |  |
| user_id | bigint |  | false |  | vls_tickets | users |
| currency_iso | character | 3 | false |  | vls_tickets | currencies |
| whitelabel_id | integer |  | false |  | vls_tickets | whitelabels |
| details | json |  | false |  |  |  |
| provider_transaction | character varying | 255 | false |  |  |  |
| created_at | timestamp without time zone |  | true |  |  |  |
| updated_at | timestamp without time zone |  | true |  |  |  |
