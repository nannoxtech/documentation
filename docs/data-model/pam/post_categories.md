# Table: post_categories

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| id | bigint |  | false | nextval('pam.post_categories_id_seq'::regclass) | post_categories | post_categories |
| name | character varying | 50 | false |  |  |  |
| translations | json |  | true |  |  |  |
| created_at | timestamp without time zone |  | true |  |  |  |
| updated_at | timestamp without time zone |  | true |  |  |  |
| sub_category | boolean |  | false | false |  |  |
