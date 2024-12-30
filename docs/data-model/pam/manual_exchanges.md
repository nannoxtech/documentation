# Table: manual_exchanges

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| id | smallint |  | false | nextval('pam.manual_exchanges_id_seq'::regclass) | manual_exchanges | manual_exchanges |
| currency_iso | character | 3 | false |  | manual_exchanges | currencies |
| amount | double precision |  | false |  |  |  |
| created_at | timestamp without time zone |  | true |  |  |  |
| updated_at | timestamp without time zone |  | true |  |  |  |
| api_amount | double precision |  | true |  |  |  |
| whitelabel_id | integer |  | false |  | manual_exchanges | whitelabels |
