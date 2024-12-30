# Table: payment_methods

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| id | smallint |  | false | nextval('payments.account_types_id_seq'::regclass) | payment_methods | payment_methods |
| name | character varying | 50 | false |  |  |  |
| logo | character varying | 255 | true |  |  |  |
| account_required | boolean |  | false | false |  |  |
| show | boolean |  | false | true |  |  |
