# Table: wallets

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| id | bigint |  | false | nextval('wallet.wallets_id_seq'::regclass) | wallets | wallets |
| user_id | bigint |  | false |  | wallets | users |
| quantity | bigint |  | false | 0 |  |  |
| currency_iso | character varying | 3 | false |  | wallets | currencies |
| balance | double precision |  | false | '0'::double precision |  |  |
| balance_locked | double precision |  | false | '0'::double precision |  |  |
| created_at | timestamp without time zone |  | true |  |  |  |
| updated_at | timestamp without time zone |  | true |  |  |  |
| bonus | boolean |  | false | false |  |  |
| provider_type_id | smallint |  | true |  |  |  |
| parent_wallet | bigint |  | true |  | wallets | wallets |
| campaign_id | bigint |  | true |  |  |  |
