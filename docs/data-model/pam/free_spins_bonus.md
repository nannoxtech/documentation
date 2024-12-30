# Table: free_spins_bonus

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| id | bigint |  | false | nextval('pam.free_spins_bonus_id_seq'::regclass) | free_spins_bonus | free_spins_bonus |
| user_id | bigint |  | false |  |  |  |
| whitelabel_id | bigint |  | false |  |  |  |
| code_reference | character varying | 255 | false |  |  |  |
| currency_iso | character | 255 | false |  |  |  |
| exp_date | timestamp without time zone |  | true |  |  |  |
| status | boolean |  | false | false |  |  |
| provider_id | bigint |  | false |  |  |  |
| game_id | bigint |  | false |  |  |  |
| code | character varying | 255 | false |  |  |  |
| extra_data | json |  | false |  |  |  |
| created_at | timestamp without time zone |  | true |  |  |  |
| updated_at | timestamp without time zone |  | true |  |  |  |
