# Table: provider_sessions

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| id | bigint |  | false | nextval('pam.provider_sessions_id_seq'::regclass) | provider_sessions | provider_sessions |
| wallet_id | integer |  | false |  |  |  |
| provider_id | integer |  | false |  | provider_sessions | providers |
| token | character varying | 255 | false |  |  |  |
| timestamp | bigint |  | false |  |  |  |
| expired | boolean |  | false | false |  |  |
| created_at | timestamp without time zone |  | true |  |  |  |
| updated_at | timestamp without time zone |  | true |  |  |  |
