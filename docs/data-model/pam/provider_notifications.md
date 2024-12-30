# Table: provider_notifications

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| id | bigint |  | false | nextval('pam.provider_notifications_id_seq'::regclass) | provider_notifications | provider_notifications |
| user_id | bigint |  | false |  | provider_notifications | users |
| amount | double precision |  | false |  |  |  |
| whitelabel_id | integer |  | false |  | provider_notifications | whitelabels |
| currency_iso | character | 3 | false |  | provider_notifications | currencies |
| provider_id | smallint |  | false |  | provider_notifications | providers |
| data | json |  | false |  |  |  |
| created_at | timestamp without time zone |  | true |  |  |  |
| updated_at | timestamp without time zone |  | true |  |  |  |
