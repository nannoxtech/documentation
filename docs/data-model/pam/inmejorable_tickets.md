# Table: inmejorable_tickets

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| id | bigint |  | false | nextval('pam.inmejorable_tickets_id_seq'::regclass) | inmejorable_tickets | inmejorable_tickets |
| amount | double precision |  | false |  |  |  |
| transaction_type_id | smallint |  | false |  | inmejorable_tickets | transaction_types |
| wallet_transaction | bigint |  | false |  |  |  |
| balance | double precision |  | false |  |  |  |
| user_id | bigint |  | false |  | inmejorable_tickets | users |
| currency_iso | character | 3 | false |  | inmejorable_tickets | currencies |
| whitelabel_id | integer |  | false |  | inmejorable_tickets | whitelabels |
| reference | integer |  | false |  |  |  |
| created_at | timestamp without time zone |  | true |  |  |  |
| updated_at | timestamp without time zone |  | true |  |  |  |
| bet_type | character varying | 10 | true |  |  |  |
| extra_data | json |  | true |  |  |  |
| status | boolean |  | false | true |  |  |
