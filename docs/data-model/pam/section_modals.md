# Table: section_modals

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| id | bigint |  | false | nextval('pam.section_modals_id_seq'::regclass) | section_modals | section_modals |
| image | character varying | 255 | false |  |  |  |
| route | character varying | 255 | false |  |  |  |
| status | boolean |  | false |  |  |  |
| one_time | boolean |  | false |  |  |  |
| scroll | boolean |  | false |  |  |  |
| language | character varying | 5 | false |  |  |  |
| currency_iso | character varying | 3 | false |  |  |  |
| whitelabel_id | integer |  | false |  | section_modals | whitelabels |
| created_at | timestamp without time zone |  | true |  |  |  |
| updated_at | timestamp without time zone |  | true |  |  |  |
| url | character varying | 255 | true |  |  |  |
