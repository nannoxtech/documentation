# Table: notifications

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| id | bigint |  | false | nextval('pam.notifications_id_seq'::regclass) | notifications | notifications |
| title | text |  | false |  |  |  |
| content | text |  | false |  |  |  |
| image | character varying | 255 | true |  |  |  |
| currency_iso | character varying | 3 | false |  |  |  |
| whitelabel_id | integer |  | false |  | notifications | whitelabels |
| status | boolean |  | false | true |  |  |
| notification_type_id | smallint |  | false |  | notifications | notifications_types |
| language | character varying | 5 | false |  |  |  |
| deleted_at | timestamp without time zone |  | true |  |  |  |
| created_at | timestamp without time zone |  | true |  |  |  |
| updated_at | timestamp without time zone |  | true |  |  |  |
| operator_id | integer |  | true |  |  |  |
