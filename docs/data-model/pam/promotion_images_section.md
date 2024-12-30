# Table: promotion_images_section

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| id | bigint |  | false | nextval('pam.promotion_images_section_id_seq'::regclass) | promotion_images_section | promotion_images_section |
| title | character varying | 255 | true |  |  |  |
| description | text |  | true |  |  |  |
| button | character varying | 255 | true |  |  |  |
| image | character varying | 255 | false |  |  |  |
| url | character varying | 255 | true |  |  |  |
| language | character varying | 5 | false |  |  |  |
| currency_iso | character varying | 3 | false |  |  |  |
| order | smallint |  | false |  |  |  |
| status | boolean |  | false | true |  |  |
| section_images_id | smallint |  | false |  | promotion_images_section | section_images |
| whitelabel_id | integer |  | false |  | promotion_images_section | whitelabels |
| created_at | timestamp without time zone |  | true |  |  |  |
| updated_at | timestamp without time zone |  | true |  |  |  |
| element_type_id | smallint |  | true |  | promotion_images_section | template_elements |
| section | character varying | 25 | true |  |  |  |
| start_date | timestamp without time zone |  | true |  |  |  |
| end_date | timestamp without time zone |  | true |  |  |  |
