# Table: exclude_role_permissions_user

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| id | bigint |  | false | nextval('pam.exclude_role_permissions_user_id_seq'::regclass) | exclude_role_permissions_user | exclude_role_permissions_user |
| user_id | integer |  | false |  | exclude_role_permissions_user | users |
| data | json |  | true |  |  |  |
| exclude | boolean |  | false |  |  |  |
| created_at | timestamp without time zone |  | true |  |  |  |
| updated_at | timestamp without time zone |  | true |  |  |  |
