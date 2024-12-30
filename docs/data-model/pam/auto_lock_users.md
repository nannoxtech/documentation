# Table: auto_lock_users

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| id | bigint |  | false | nextval('pam.auto_lock_users_id_seq'::regclass) | auto_lock_users | auto_lock_users |
| user_id | bigint |  | false |  | auto_lock_users | users |
| data | json |  | true |  |  |  |
| active | boolean |  | false | false |  |  |
| currency_iso | character | 3 | false |  | auto_lock_users | currencies |
| whitelabel_id | integer |  | false |  | auto_lock_users | whitelabels |
| start_date | timestamp without time zone |  | false |  |  |  |
| end_date | timestamp without time zone |  | true |  |  |  |
| created_at | timestamp without time zone |  | true |  |  |  |
| updated_at | timestamp without time zone |  | true |  |  |  |
| deleted_at | timestamp without time zone |  | true |  |  |  |
