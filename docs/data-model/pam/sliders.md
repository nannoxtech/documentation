# Table: sliders

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| id | bigint |  | false | nextval('pam.sliders_id_seq'::regclass) | sliders | sliders |
| image | character varying | 255 | false |  |  |  |
| url | character varying | 255 | true |  |  |  |
| start_date | timestamp without time zone |  | true |  |  |  |
| end_date | timestamp without time zone |  | true |  |  |  |
| language | character varying | 5 | false |  |  |  |
| currency_iso | character varying | 3 | false |  |  |  |
| order | smallint |  | false |  |  |  |
| status | boolean |  | false | true |  |  |
| whitelabel_id | integer |  | false |  | sliders | whitelabels |
| created_at | timestamp without time zone |  | true |  |  |  |
| updated_at | timestamp without time zone |  | true |  |  |  |
| mobile | character varying | 5 | true |  |  |  |
| element_type_id | smallint |  | true |  | sliders | template_elements |
| section | character varying | 25 | true |  |  |  |
| route | character varying | 255 | true |  |  |  |
| video | character varying | 255 | true |  |  |  |
| data | json |  | true |  |  |  |
