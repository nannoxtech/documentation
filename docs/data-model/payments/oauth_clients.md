# Table: oauth_clients

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| id | bigint |  | false | nextval('payments.oauth_clients_id_seq'::regclass) | oauth_clients | oauth_clients |
| user_id | bigint |  | true |  |  |  |
| name | character varying | 255 | false |  |  |  |
| secret | uuid |  | true |  |  |  |
| endpoint | character varying | 255 | false |  |  |  |
| personal_access_client | boolean |  | false |  |  |  |
| password_client | boolean |  | false |  |  |  |
| revoked | boolean |  | false |  |  |  |
| created_at | timestamp without time zone |  | true |  |  |  |
| updated_at | timestamp without time zone |  | true |  |  |  |
| provider | character varying | 255 | true |  |  |  |
