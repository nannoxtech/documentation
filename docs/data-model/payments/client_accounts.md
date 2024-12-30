# Table: client_accounts

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| id | bigint |  | false | nextval('payments.client_accounts_id_seq'::regclass) | client_accounts | client_accounts |
| oauth_client_id | bigint |  | false |  | client_accounts | oauth_clients |
| payment_method_id | smallint |  | false |  | client_accounts | payment_methods |
| currency_iso | character | 3 | false |  | client_accounts | currencies |
| data | json |  | true |  |  |  |
| created_at | timestamp without time zone |  | true |  |  |  |
| updated_at | timestamp without time zone |  | true |  |  |  |
| status | boolean |  | false | true |  |  |
