# Table: section_images

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| id | bigint |  | false | nextval('pam.section_images_id_seq'::regclass) | section_images | section_images |
| title | character varying | 255 | true |  |  |  |
| description | text |  | true |  |  |  |
| button | character varying | 255 | true |  |  |  |
| image | character varying | 255 | false |  |  |  |
| url | character varying | 255 | true |  |  |  |
| language | character varying | 5 | false |  |  |  |
| currency_iso | character varying | 3 | false |  |  |  |
| status | boolean |  | false | true |  |  |
| whitelabel_id | integer |  | false |  | section_images | whitelabels |
| created_at | timestamp without time zone |  | true |  |  |  |
| updated_at | timestamp without time zone |  | true |  |  |  |
| position | character varying | 50 | true |  |  |  |
| mobile | character varying | 5 | true |  |  |  |
| element_type_id | smallint |  | true |  | section_images | template_elements |
| section | character varying | 25 | true |  |  |  |
| start_date | timestamp without time zone |  | true |  |  |  |
| end_date | timestamp without time zone |  | true |  |  |  |
| video | character varying | 255 | true |  |  |  |
| background | character varying | 255 | true |  |  |  |
| provider | character varying | 255 | true |  |  |  |
| order | smallint |  | true |  |  |  |
