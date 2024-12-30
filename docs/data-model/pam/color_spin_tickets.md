# Table: color_spin_tickets

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| id | bigint |  | false | nextval('pam.color_spin_tickets_id_seq'::regclass) | color_spin_tickets | color_spin_tickets |
| amount | double precision |  | false |  |  |  |
| transaction_type_id | smallint |  | false |  | color_spin_tickets | transaction_types |
| wallet_transaction | bigint |  | false |  |  |  |
| balance | double precision |  | false |  |  |  |
| user_id | bigint |  | false |  | color_spin_tickets | users |
| currency_iso | character | 3 | false |  | color_spin_tickets | currencies |
| whitelabel_id | integer |  | false |  | color_spin_tickets | whitelabels |
| details | json |  | false |  |  |  |
| provider_transaction | character varying | 255 | false |  |  |  |
| created_at | timestamp without time zone |  | true |  |  |  |
| updated_at | timestamp without time zone |  | true |  |  |  |
