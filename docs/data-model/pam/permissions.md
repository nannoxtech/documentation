# Table: permissions

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| id | bigint |  | false | nextval('pam.permissions_id_seq'::regclass) | permissions | permissions |
| description | character varying | 50 | false |  |  |  |
| depends | bigint |  | true |  |  |  |
