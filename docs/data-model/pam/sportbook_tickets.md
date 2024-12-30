# Table: sportbook_tickets

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| id | bigint |  | false | nextval('pam.sportbook_tickets_id_seq'::regclass) | sportbook_tickets | sportbook_tickets |
| amount | double precision |  | false |  |  |  |
| transaction_type_id | smallint |  | false |  | sportbook_tickets | transaction_types |
| wallet_transaction | bigint |  | false |  |  |  |
| balance | double precision |  | false |  |  |  |
| user_id | bigint |  | false |  | sportbook_tickets | users |
| currency_iso | character | 3 | false |  | sportbook_tickets | currencies |
| whitelabel_id | integer |  | false |  | sportbook_tickets | whitelabels |
| bet_id | character varying | 50 | false |  |  |  |
| ticket | json |  | true |  |  |  |
| bet_type | character varying | 20 | false |  |  |  |
| created_at | timestamp without time zone |  | true |  |  |  |
| updated_at | timestamp without time zone |  | true |  |  |  |
