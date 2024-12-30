# Table: closures_games_totals

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| id | bigint |  | false | nextval('pam.closures_games_totals_id_seq'::regclass) | closures_games_totals | closures_games_totals |
| game_id | integer |  | false |  | closures_games_totals | games |
| game_name | character varying | 255 | false |  |  |  |
| mobile | boolean |  | false |  |  |  |
| played | double precision |  | false |  |  |  |
| won | double precision |  | false |  |  |  |
| profit | double precision |  | false |  |  |  |
| rtp | double precision |  | false |  |  |  |
| bets | integer |  | false |  |  |  |
| currency_iso | character | 3 | false |  | closures_games_totals | currencies |
| whitelabel_id | integer |  | false |  | closures_games_totals | whitelabels |
| provider_id | smallint |  | false |  | closures_games_totals | providers |
| created_at | timestamp without time zone |  | true |  |  |  |
| updated_at | timestamp without time zone |  | true |  |  |  |
| start_date | timestamp without time zone |  | false |  |  |  |
| end_date | timestamp without time zone |  | false |  |  |  |
