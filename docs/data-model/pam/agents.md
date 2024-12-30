# Table: agents

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| id | bigint |  | false | nextval('pam.agents_id_seq'::regclass) | agents | agents |
| user_id | bigint |  | false |  | agents | users |
| owner_id | bigint |  | true |  | agents | users |
| master | boolean |  | false |  |  |  |
| created_at | timestamp without time zone |  | true |  |  |  |
| updated_at | timestamp without time zone |  | true |  |  |  |
| percentage | double precision |  | true |  |  |  |
