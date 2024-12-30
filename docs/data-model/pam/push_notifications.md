# Table: push_notifications

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| id | bigint |  | false | nextval('pam.push_notifications_id_seq'::regclass) | push_notifications | push_notifications |
| payment_method_id | integer |  | false |  |  |  |
| amount | double precision |  | false |  |  |  |
| read | boolean |  | false | false |  |  |
| whitelabel_id | integer |  | false |  | push_notifications | whitelabels |
| currency_iso | character | 3 | false |  | push_notifications | currencies |
| created_at | timestamp without time zone |  | true |  |  |  |
| updated_at | timestamp without time zone |  | true |  |  |  |
