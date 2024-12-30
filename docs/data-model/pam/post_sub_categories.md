# Table: post_sub_categories

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| id | bigint |  | false | nextval('pam.post_sub_categories_id_seq'::regclass) | post_sub_categories | post_sub_categories |
| name | character varying | 255 | false |  |  |  |
| translations | json |  | true |  |  |  |
