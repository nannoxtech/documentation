# Table: closures_registered_users

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| id | bigint |  | false | nextval('pam.closures_registered_users_id_seq'::regclass) | closures_registered_users | closures_registered_users |
| date | date |  | false |  |  |  |
| quantity | integer |  | false |  |  |  |
| whitelabel_id | integer |  | false |  | closures_registered_users | whitelabels |
| created_at | timestamp without time zone |  | true |  |  |  |
| updated_at | timestamp without time zone |  | true |  |  |  |
