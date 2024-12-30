# Table: points_wallets

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| id | bigint |  | false | nextval('pam.points_wallets_id_seq'::regclass) | points_wallets | points_wallets |
| user_id | bigint |  | false |  | points_wallets | users |
| currency_iso | character | 3 | false |  | points_wallets | currencies |
| balance | double precision |  | false |  |  |  |
| created_at | timestamp without time zone |  | true |  |  |  |
| updated_at | timestamp without time zone |  | true |  |  |  |
