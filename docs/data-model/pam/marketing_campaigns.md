# Table: marketing_campaigns

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| id | bigint |  | false | nextval('pam.marketing_campaigns_id_seq'::regclass) | marketing_campaigns | marketing_campaigns |
| title | character varying | 255 | false |  |  |  |
| status | smallint |  | false |  |  |  |
| language | character varying | 5 | false |  |  |  |
| currency_iso | character varying | 3 | false |  |  |  |
| whitelabel_id | integer |  | false |  | marketing_campaigns | whitelabels |
| segment_id | integer |  | false |  | marketing_campaigns | segments |
| email_template_id | integer |  | false |  | marketing_campaigns | email_templates |
| created_at | timestamp without time zone |  | true |  |  |  |
| updated_at | timestamp without time zone |  | true |  |  |  |
| scheduled_date | timestamp without time zone |  | false |  |  |  |
