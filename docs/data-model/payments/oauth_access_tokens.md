# Table: oauth_access_tokens

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| id | character varying | 100 | false |  | oauth_access_tokens | oauth_access_tokens |
| user_id | bigint |  | true |  |  |  |
| client_id | bigint |  | false |  |  |  |
| name | character varying | 255 | true |  |  |  |
| scopes | text |  | true |  |  |  |
| revoked | boolean |  | false |  |  |  |
| created_at | timestamp without time zone |  | true |  |  |  |
| updated_at | timestamp without time zone |  | true |  |  |  |
| expires_at | timestamp without time zone |  | true |  |  |  |
