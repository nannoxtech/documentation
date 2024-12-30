# Table: store_rewards

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| id | bigint |  | false | nextval('pam.store_rewards_id_seq'::regclass) | store_rewards | store_rewards |
| name | character varying | 50 | false |  |  |  |
| description | text |  | false |  |  |  |
| points | double precision |  | false |  |  |  |
| image | character varying | 255 | false |  |  |  |
| data | json |  | false |  |  |  |
| currency_iso | character varying | 3 | false |  |  |  |
| whitelabel_id | integer |  | false |  | store_rewards | whitelabels |
| quantity | integer |  | true |  |  |  |
| start_date | timestamp without time zone |  | true |  |  |  |
| end_date | timestamp without time zone |  | true |  |  |  |
| status | boolean |  | false | true |  |  |
| created_at | timestamp without time zone |  | true |  |  |  |
| updated_at | timestamp without time zone |  | true |  |  |  |
| language | character varying | 5 | false |  |  |  |
| deleted_at | timestamp without time zone |  | true |  |  |  |
| category_id | bigint |  | true |  | store_rewards | rewards_categories |
| slug | character varying | 100 | true |  |  |  |
| amount | double precision |  | true |  |  |  |
| type | boolean |  | false | false |  |  |
