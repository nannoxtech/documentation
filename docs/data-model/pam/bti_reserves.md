# Table: bti_reserves

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| id | bigint |  | false | nextval('pam.bti_reserves_id_seq'::regclass) | bti_reserves | bti_reserves |
| user_id | bigint |  | false |  | bti_reserves | users |
| reserve_id | bigint |  | false |  |  |  |
| reserved_amount | double precision |  | false |  |  |  |
| commited_amount | double precision |  | true |  |  |  |
| real_amount | double precision |  | true |  |  |  |
| bonus_amount | double precision |  | true |  |  |  |
| balance | double precision |  | false |  |  |  |
| wallet_transaction | bigint |  | true |  |  |  |
| currency_iso | character | 3 | false |  | bti_reserves | currencies |
| whitelabel_id | integer |  | false |  | bti_reserves | whitelabels |
| status | smallint |  | false |  |  |  |
| created_at | timestamp without time zone |  | true |  |  |  |
| updated_at | timestamp without time zone |  | true |  |  |  |
