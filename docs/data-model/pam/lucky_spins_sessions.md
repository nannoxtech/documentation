# Table: lucky_spins_sessions

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| id | bigint |  | false | nextval('pam.lucky_spins_sessions_id_seq'::regclass) | lucky_spins_sessions | lucky_spins_sessions |
| token | character varying | 32 | false |  |  |  |
| sign | character varying | 64 | false |  |  |  |
| game_id | integer |  | false |  |  |  |
| user_id | integer |  | false |  | lucky_spins_sessions | users |
| currency_iso | character varying | 3 | false |  | lucky_spins_sessions | currencies |
| lang | character varying | 5 | false |  |  |  |
| whitelabel_id | integer |  | false |  | lucky_spins_sessions | whitelabels |
| created_at | timestamp without time zone |  | true |  |  |  |
| updated_at | timestamp without time zone |  | true |  |  |  |
| wallet_id | bigint |  | true |  |  |  |
