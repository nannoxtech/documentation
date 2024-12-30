# Table: iq_soft_tickets

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| id | bigint |  | false | nextval('pam.iq_soft_tickets_id_seq'::regclass) | iq_soft_tickets | iq_soft_tickets |
| amount | double precision |  | false |  |  |  |
| transaction_type_id | smallint |  | false |  | iq_soft_tickets | transaction_types |
| wallet_transaction | bigint |  | false |  |  |  |
| balance | double precision |  | false |  |  |  |
| user_id | bigint |  | false |  | iq_soft_tickets | users |
| currency_iso | character | 3 | false |  | iq_soft_tickets | currencies |
| whitelabel_id | integer |  | false |  | iq_soft_tickets | whitelabels |
| type_id | integer |  | false |  |  |  |
| provider_transaction | integer |  | false |  |  |  |
| rollback | boolean |  | false |  |  |  |
| created_at | timestamp without time zone |  | true |  |  |  |
| updated_at | timestamp without time zone |  | true |  |  |  |
| info | json |  | true |  |  |  |
| status | smallint |  | true |  |  |  |
| data | json |  | true |  |  |  |
