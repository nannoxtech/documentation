# Table: email_templates

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| id | bigint |  | false | nextval('pam.email_templates_id_seq'::regclass) | email_templates | email_templates |
| title | character varying | 255 | false |  |  |  |
| metadata | json |  | false |  |  |  |
| content | json |  | false |  |  |  |
| language | character varying | 5 | false |  |  |  |
| currency_iso | character varying | 3 | false |  |  |  |
| status | boolean |  | false |  |  |  |
| whitelabel_id | integer |  | false |  | email_templates | whitelabels |
| created_at | timestamp without time zone |  | true |  |  |  |
| updated_at | timestamp without time zone |  | true |  |  |  |
| html | text |  | true |  |  |  |
| subject | character varying | 255 | true |  |  |  |
