# Table: whitelabel_games_categories

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| id | smallint |  | false | nextval('pam.client_games_categories_id_seq'::regclass) | whitelabel_games_categories | whitelabel_games_categories |
| name | character varying | 50 | false |  |  |  |
| translations | json |  | true |  |  |  |
