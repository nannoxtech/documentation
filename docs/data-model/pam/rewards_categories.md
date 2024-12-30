# Table: rewards_categories

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| id | bigint |  | false | nextval('pam.rewards_categories_id_seq'::regclass) | rewards_categories | rewards_categories |
| name | character varying | 255 | false |  |  |  |
| whitelabel_id | integer |  | false |  | rewards_categories | whitelabels |
| created_at | timestamp without time zone |  | true |  |  |  |
| updated_at | timestamp without time zone |  | true |  |  |  |
