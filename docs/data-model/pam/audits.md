# Table: audits

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| id | bigint |  | false | nextval('pam.audits_id_seq'::regclass) | audits | audits |
| user_id | bigint |  | false |  | audits | users |
| audit_type_id | smallint |  | false |  | audits | audit_types |
| data | json |  | false |  |  |  |
| created_at | timestamp without time zone |  | true |  |  |  |
| updated_at | timestamp without time zone |  | true |  |  |  |
| whitelabel_id | smallint |  | true |  | audits | whitelabels |
