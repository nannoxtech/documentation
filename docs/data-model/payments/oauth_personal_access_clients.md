# Table: oauth_personal_access_clients

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| id | bigint |  | false | nextval('payments.oauth_personal_access_clients_id_seq'::regclass) | oauth_personal_access_clients | oauth_personal_access_clients |
| client_id | bigint |  | false |  |  |  |
| created_at | timestamp without time zone |  | true |  |  |  |
| updated_at | timestamp without time zone |  | true |  |  |  |
