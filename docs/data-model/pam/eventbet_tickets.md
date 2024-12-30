# Table: eventbet_tickets

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| id | bigint |  | false | nextval('pam.eventbet_tickets_id_seq'::regclass) | eventbet_tickets | eventbet_tickets |
| amount | double precision |  | false |  |  |  |
| transaction_type_id | smallint |  | false |  | eventbet_tickets | transaction_types |
| wallet_transaction | bigint |  | false |  |  |  |
| balance | double precision |  | false |  |  |  |
| user_id | bigint |  | false |  | eventbet_tickets | users |
| currency_iso | character | 3 | false |  | eventbet_tickets | currencies |
| whitelabel_id | integer |  | false |  | eventbet_tickets | whitelabels |
| provider_transaction | character varying | 255 | false |  |  |  |
| rollback | boolean |  | false |  |  |  |
| created_at | timestamp without time zone |  | true |  |  |  |
| updated_at | timestamp without time zone |  | true |  |  |  |
