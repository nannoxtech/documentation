# Table: closures_users_totals

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| id | bigint |  | false | nextval('pam.closures_users_totals_id_seq'::regclass) | closures_users_totals | closures_users_totals |
| user_id | bigint |  | false |  | closures_users_totals | users |
| username | character varying | 15 | false |  |  |  |
| played | double precision |  | false |  |  |  |
| won | double precision |  | false |  |  |  |
| profit | double precision |  | false |  |  |  |
| rtp | double precision |  | false |  |  |  |
| bets | integer |  | false |  |  |  |
| game_id | integer |  | true |  | closures_users_totals | games |
| currency_iso | character | 3 | false |  | closures_users_totals | currencies |
| whitelabel_id | integer |  | false |  | closures_users_totals | whitelabels |
| provider_id | smallint |  | false |  | closures_users_totals | providers |
| created_at | timestamp without time zone |  | true |  |  |  |
| updated_at | timestamp without time zone |  | true |  |  |  |
| start_date | timestamp without time zone |  | false |  |  |  |
| end_date | timestamp without time zone |  | false |  |  |  |
