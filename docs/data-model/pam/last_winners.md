# Table: last_winners

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| id | bigint |  | false | nextval('pam.last_winners_id_seq'::regclass) | last_winners | last_winners |
| user_id | integer |  | false |  | last_winners | users |
| dotsuite_game_id | integer |  | true |  | last_winners | dotsuite_games |
| amount | double precision |  | false |  |  |  |
| currency_iso | character | 3 | false |  |  |  |
| whitelabel_id | integer |  | false |  | last_winners | whitelabels |
| data | json |  | true |  |  |  |
| provider_id | smallint |  | false |  | last_winners | providers |
| provider_game_id | character varying | 255 | false |  |  |  |
| start_date | timestamp without time zone |  | false |  |  |  |
| end_date | timestamp without time zone |  | false |  |  |  |
| created_at | timestamp without time zone |  | true |  |  |  |
| updated_at | timestamp without time zone |  | true |  |  |  |
| game_id | integer |  | true |  | last_winners | games |
