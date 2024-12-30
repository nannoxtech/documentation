# Table: payments_notification

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| id | bigint |  | false | nextval('pam.payments_notification_id_seq'::regclass) | payments_notification | payments_notification |
| user_id | bigint |  | false |  | payments_notification | users |
| amount | double precision |  | false |  |  |  |
| currency_iso | character | 3 | false |  | payments_notification | currencies |
| whitelabel_id | integer |  | false |  | payments_notification | whitelabels |
| created_at | timestamp without time zone |  | true |  |  |  |
| updated_at | timestamp without time zone |  | true |  |  |  |
