# Table: client_payment_methods

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| id | bigint |  | false | nextval('payments.client_payment_methods_id_seq'::regclass) | client_payment_methods | client_payment_methods |
| oauth_client_id | bigint |  | false |  | client_payment_methods | oauth_clients |
| payment_method_id | bigint |  | false |  | client_payment_methods | payment_methods |
| currency_iso | character | 3 | false |  | client_payment_methods | currencies |
| level_id | smallint |  | false |  | client_payment_methods | levels |
| transaction_type_id | smallint |  | false |  | client_payment_methods | transaction_types |
| min | double precision |  | true |  |  |  |
| max | double precision |  | true |  |  |  |
| created_at | timestamp without time zone |  | true |  |  |  |
| updated_at | timestamp without time zone |  | true |  |  |  |
| status | boolean |  | false | true |  |  |
| order | integer |  | true |  |  |  |
| limits | json |  | true |  |  |  |
