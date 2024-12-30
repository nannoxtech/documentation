# Table: password_resets

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| token | character varying | 255 | false |  | password_resets | password_resets |
| user_id | bigint |  | false |  |  |  |
| whitelabel_id | integer |  | false |  | password_resets | whitelabels |
| created_at | timestamp without time zone |  | true |  |  |  |
