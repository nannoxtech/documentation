# Table: segments

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| id | bigint |  | false | nextval('pam.segments_id_seq'::regclass) | segments | segments |
| name | character varying | 255 | false |  |  |  |
| description | character varying | 255 | false |  |  |  |
| data | json |  | true |  |  |  |
| whitelabel_id | integer |  | false |  | segments | whitelabels |
| created_at | timestamp without time zone |  | true |  |  |  |
| updated_at | timestamp without time zone |  | true |  |  |  |
| filter | json |  | true |  |  |  |
| status | boolean |  | false | true |  |  |
