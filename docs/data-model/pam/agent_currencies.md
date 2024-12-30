# Table: agent_currencies

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| id | bigint |  | false | nextval('pam.agent_currencies_id_seq'::regclass) | agent_currencies | agent_currencies |
| agent_id | bigint |  | false |  | agent_currencies | agents |
| currency_iso | character | 3 | false |  | agent_currencies | currencies |
| balance | double precision |  | false |  |  |  |
| created_at | timestamp without time zone |  | true |  |  |  |
| updated_at | timestamp without time zone |  | true |  |  |  |
