# Table: tickets

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| id | bigint |  | false | nextval('pam.tickets_id_seq'::regclass) | tickets | tickets |
| amount | double precision |  | false |  |  |  |
| real_amount | double precision |  | false |  |  |  |
| bonus_amount | double precision |  | false |  |  |  |
| transaction_type_id | smallint |  | false |  | tickets | transaction_types |
| wallet_transaction | bigint |  | false |  |  |  |
| balance | double precision |  | false |  |  |  |
| user_id | bigint |  | false |  | tickets | users |
| currency_iso | character | 3 | false |  | tickets | currencies |
| whitelabel_id | integer |  | false |  | tickets | whitelabels |
| game_id | integer |  | true |  | tickets | games |
| provider_transaction | character varying | 255 | true |  |  |  |
| provider_round | character varying | 255 | true |  |  |  |
| provider_id | smallint |  | false |  | tickets | providers |
| aggregator_id | smallint |  | true |  | tickets | providers |
| status | smallint |  | false |  |  |  |
| extra_data | json |  | true |  |  |  |
| created_at | timestamp without time zone |  | true |  |  |  |
| updated_at | timestamp without time zone |  | true |  |  |  |
