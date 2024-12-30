# Table: campaigns

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| id | bigint |  | false | nextval('pam.campaigns_id_seq'::regclass) | campaigns | campaigns |
| name | character varying | 100 | false |  |  |  |
| data | json |  | false |  |  |  |
| device | smallint |  | false |  |  |  |
| start_date | timestamp without time zone |  | true |  |  |  |
| end_date | timestamp without time zone |  | true |  |  |  |
| status | boolean |  | false | true |  |  |
| allocation_criteria_id | smallint |  | true |  | campaigns | campaign_allocation_criteria |
| currency_iso | character varying | 3 | false |  | campaigns | currencies |
| whitelabel_id | integer |  | false |  | campaigns | whitelabels |
| created_at | timestamp without time zone |  | true |  |  |  |
| updated_at | timestamp without time zone |  | true |  |  |  |
| translations | json |  | true |  |  |  |
| deleted_at | timestamp without time zone |  | true |  |  |  |
| version | smallint |  | false | '1'::smallint |  |  |
| parent_campaign | bigint |  | true |  | campaigns | campaigns |
| original_campaign | bigint |  | true |  | campaigns | campaigns |
| bonus_type_id | smallint |  | true |  | campaigns | bonus_types |
