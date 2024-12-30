# Table: notifications_groups

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| id | bigint |  | false | nextval('pam.notifications_groups_id_seq'::regclass) | notifications_groups | notifications_groups |
| name | character varying | 255 | false |  |  |  |
| description | text |  | false |  |  |  |
| currency_iso | character varying | 3 | false |  |  |  |
| whitelabel_id | integer |  | false |  | notifications_groups | whitelabels |
| operator_id | integer |  | false |  | notifications_groups | users |
| created_at | timestamp without time zone |  | true |  |  |  |
| updated_at | timestamp without time zone |  | true |  |  |  |
