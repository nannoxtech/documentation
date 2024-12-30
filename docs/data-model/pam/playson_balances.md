# Table: playson_balances

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| id | bigint |  | false | nextval('pam.playson_balances_id_seq'::regclass) | playson_balances | playson_balances |
| user_id | integer |  | false |  | playson_balances | users |
| provider_id | integer |  | false |  |  |  |
| session | character varying | 255 | false |  |  |  |
| balance | double precision |  | false |  |  |  |
| currency_iso | character | 3 | false |  | playson_balances | currencies |
| created_at | timestamp without time zone |  | true |  |  |  |
| updated_at | timestamp without time zone |  | true |  |  |  |
