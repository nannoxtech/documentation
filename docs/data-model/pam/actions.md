# Table: actions

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| id | bigint |  | false | nextval('pam.actions_id_seq'::regclass) | actions | actions |
| name | character varying | 50 | false |  |  |  |
| action_type_id | smallint |  | false |  | actions | actions_types |
