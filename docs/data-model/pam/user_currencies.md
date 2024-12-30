# Table: user_currencies

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| id | bigint |  | false | nextval('pam.user_currencies_id_seq'::regclass) | user_currencies | user_currencies |
| user_id | bigint |  | false |  | user_currencies | users |
| currency_iso | character | 3 | false |  | user_currencies | currencies |
| wallet_id | bigint |  | false |  |  |  |
| default | boolean |  | false |  |  |  |
| created_at | timestamp without time zone |  | true |  |  |  |
| updated_at | timestamp without time zone |  | true |  |  |  |
