# Table: tvbet_tokens

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| id | bigint |  | false | nextval('pam.tvbet_tokens_id_seq'::regclass) | tvbet_tokens | tvbet_tokens |
| user_id | integer |  | false |  | tvbet_tokens | users |
| auth_token | character varying | 100 | false |  |  |  |
| refresh_token | character varying | 100 | false |  |  |  |
| last_activity | timestamp without time zone |  | false |  |  |  |
| created_at | timestamp without time zone |  | true |  |  |  |
| updated_at | timestamp without time zone |  | true |  |  |  |
