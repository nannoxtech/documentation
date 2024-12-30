# Table: posts

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| id | bigint |  | false | nextval('pam.posts_id_seq'::regclass) | posts | posts |
| title | character varying | 255 | false |  |  |  |
| slug | character varying | 255 | false |  |  |  |
| content | text |  | false |  |  |  |
| image | character varying | 255 | false |  |  |  |
| start_date | timestamp without time zone |  | true |  |  |  |
| end_date | timestamp without time zone |  | true |  |  |  |
| language | character | 5 | false |  |  |  |
| currency_iso | character varying | 3 | false |  |  |  |
| status | boolean |  | false | true |  |  |
| whitelabel_id | integer |  | false |  | posts | whitelabels |
| created_at | timestamp without time zone |  | true |  |  |  |
| updated_at | timestamp without time zone |  | true |  |  |  |
| main_image | character varying | 255 | true |  |  |  |
| post_categories_id | smallint |  | true |  | posts | post_categories |
| sub_categories_id | integer |  | true |  | posts | post_sub_categories |
