# Table: oauth_refresh_tokens

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| id | character varying | 100 | false |  | oauth_refresh_tokens | oauth_refresh_tokens |
| access_token_id | character varying | 100 | false |  |  |  |
| revoked | boolean |  | false |  |  |  |
| expires_at | timestamp without time zone |  | true |  |  |  |
