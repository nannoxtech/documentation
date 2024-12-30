# Table: landing_pages

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| id | bigint |  | false | nextval('pam.landing_pages_id_seq'::regclass) | landing_pages | landing_pages |
| currency_iso | character varying | 3 | false |  |  |  |
| language | character varying | 5 | false |  |  |  |
| whitelabel_id | integer |  | false |  | landing_pages | whitelabels |
| data | json |  | false |  |  |  |
| status | boolean |  | false |  |  |  |
| start_date | timestamp without time zone |  | false |  |  |  |
| end_date | timestamp without time zone |  | false |  |  |  |
| created_at | timestamp without time zone |  | true |  |  |  |
| updated_at | timestamp without time zone |  | true |  |  |  |
| name | character varying | 255 | true |  |  |  |
