# Table: email_type_whitelabel

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| email_type_id | smallint |  | false |  | email_type_whitelabel | email_types |
| email_type_id | smallint |  | false |  | email_type_whitelabel | email_type_whitelabel |
| email_type_id | smallint |  | false |  | email_type_whitelabel | email_type_whitelabel |
| whitelabel_id | integer |  | false |  | email_type_whitelabel | email_type_whitelabel |
| whitelabel_id | integer |  | false |  | email_type_whitelabel | email_type_whitelabel |
| whitelabel_id | integer |  | false |  | email_type_whitelabel | whitelabels |
| title | character varying | 255 | true |  |  |  |
| subtitle | character varying | 255 | true |  |  |  |
| content | text |  | true |  |  |  |
| button | character varying | 100 | true |  |  |  |
| footer | text |  | true |  |  |  |
| created_at | timestamp without time zone |  | true |  |  |  |
| updated_at | timestamp without time zone |  | true |  |  |  |
| data | json |  | true |  |  |  |
| language | character varying | 255 | true |  |  |  |
