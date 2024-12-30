# Table: store_exchanges

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| id | bigint |  | false | nextval('pam.store_exchanges_id_seq'::regclass) | store_exchanges | store_exchanges |
| user_id | bigint |  | false |  | store_exchanges | users |
| reward_id | bigint |  | false |  | store_exchanges | store_rewards |
| currency_iso | character | 3 | false |  | store_exchanges | currencies |
| whitelabel_id | integer |  | false |  | store_exchanges | whitelabels |
| created_at | timestamp without time zone |  | true |  |  |  |
| updated_at | timestamp without time zone |  | true |  |  |  |
| points | double precision |  | true |  |  |  |
| data | json |  | true |  |  |  |
