# Table: oauth_auth_codes

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| id | character varying | 100 | false |  | oauth_auth_codes | oauth_auth_codes |
| user_id | bigint |  | false |  |  |  |
| client_id | bigint |  | false |  |  |  |
| scopes | text |  | true |  |  |  |
| revoked | boolean |  | false |  |  |  |
| expires_at | timestamp without time zone |  | true |  |  |  |
