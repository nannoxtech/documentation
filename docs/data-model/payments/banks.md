# Table: banks

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| id | integer |  | false | nextval('payments.banks_id_seq'::regclass) | banks | banks |
| name | character varying | 100 | false |  |  |  |
| country_iso | character | 2 | false |  |  |  |
| status | boolean |  | false |  |  |  |
| created_at | timestamp without time zone |  | true |  |  |  |
| updated_at | timestamp without time zone |  | true |  |  |  |
| currency_iso | character | 3 | true |  | banks | currencies |
| data | json |  | true |  |  |  |
