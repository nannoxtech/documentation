# Table: mohio_tickets

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| id | bigint |  | false | nextval('pam.mohio_tickets_id_seq'::regclass) | mohio_tickets | mohio_tickets |
| amount | double precision |  | false |  |  |  |
| transaction_type_id | smallint |  | false |  | mohio_tickets | transaction_types |
| wallet_transaction | bigint |  | false |  |  |  |
| balance | double precision |  | false |  |  |  |
| user_id | integer |  | false |  | mohio_tickets | users |
| currency_iso | character varying | 3 | false |  | mohio_tickets | currencies |
| whitelabel_id | integer |  | false |  | mohio_tickets | whitelabels |
| created_at | timestamp without time zone |  | true |  |  |  |
| updated_at | timestamp without time zone |  | true |  |  |  |
| ticket | character varying | 255 | true |  |  |  |
| bet_type | character varying | 255 | false |  |  |  |
