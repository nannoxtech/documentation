# Table: sessions

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| id | character varying | 255 | false |  |  | sessions |
| user_id | bigint |  | true |  |  | users |
| ip_address | character varying | 45 | true |  |  |  |
| user_agent | text |  | true |  |  |  |
| payload | text |  | false |  |  |  |
| last_activity | integer |  | false |  |  |  |
