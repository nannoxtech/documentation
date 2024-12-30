# Table: user_accounts

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| id | bigint |  | false | nextval('payments.user_accounts_id_seq'::regclass) | user_accounts | user_accounts |
| user_id | bigint |  | false |  | user_accounts | users |
| payment_method_id | smallint |  | false |  | user_accounts | payment_methods |
| data | json |  | false |  |  |  |
| currency_iso | character | 3 | false |  | user_accounts | currencies |
| created_at | timestamp without time zone |  | true |  |  |  |
| updated_at | timestamp without time zone |  | true |  |  |  |
| status | boolean |  | false | true |  |  |
