# Table: approved_bonus_users

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| id | bigint |  | false | nextval('pam.approved_bonus_users_id_seq'::regclass) | approved_bonus_users | approved_bonus_users |
| campaign_id | bigint |  | false |  | approved_bonus_users | campaigns |
| data | json |  | true |  |  |  |
| status | boolean |  | false | true |  |  |
| created_at | timestamp without time zone |  | true |  |  |  |
| updated_at | timestamp without time zone |  | true |  |  |  |
