# Table: alps_urls

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| id | bigint |  | false | nextval('payments.alps_urls_id_seq'::regclass) | alps_urls | alps_urls |
| user_id | bigint |  | false |  | alps_urls | users |
| channel | smallint |  | false |  |  |  |
| amount | double precision |  | false |  |  |  |
| currency_iso | character | 3 | false |  | alps_urls | currencies |
| expiration | smallint |  | false |  |  |  |
| expiration_date | timestamp without time zone |  | false |  |  |  |
| url | character varying | 255 | true |  |  |  |
| transaction_id | bigint |  | true |  | alps_urls | transactions |
| created_at | timestamp without time zone |  | true |  |  |  |
| updated_at | timestamp without time zone |  | true |  |  |  |
