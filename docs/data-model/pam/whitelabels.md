# Table: whitelabels

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| id | integer |  | false | nextval('pam.whitelabels_id_seq'::regclass) | whitelabels | whitelabels |
| name | character varying | 100 | false |  |  |  |
| description | character varying | 100 | false |  |  |  |
| domain | character varying | 255 | false |  |  |  |
| status | smallint |  | false |  | whitelabels | whitelabels_status |
| created_at | timestamp without time zone |  | true |  |  |  |
| updated_at | timestamp without time zone |  | true |  |  |  |
| social_reason | character varying | 255 | true |  |  |  |
| url | character varying | 255 | true |  |  |  |
| franchise_id | bigint |  | true |  | whitelabels | franchises |
