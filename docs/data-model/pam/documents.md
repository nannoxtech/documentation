# Table: documents

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| id | integer |  | false | nextval('pam.documents_id_seq'::regclass) | documents | documents |
| whitelabel_id | integer |  | false |  | documents | whitelabels |
| currency_iso | character varying | 3 | false |  | documents | currencies |
| name | character varying | 255 | false |  |  |  |
| translations | json |  | false |  |  |  |
| status | boolean |  | false | true |  |  |
| created_at | timestamp without time zone |  | true |  |  |  |
| updated_at | timestamp without time zone |  | true |  |  |  |
