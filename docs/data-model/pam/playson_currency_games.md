# Table: playson_currency_games

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| id | bigint |  | false | nextval('pam.playson_currency_games_id_seq'::regclass) | playson_currency_games | playson_currency_games |
| currency | character | 3 | false |  | playson_currency_games | currencies |
| user_id | integer |  | false |  | playson_currency_games | users |
| provider_game_id | character varying | 255 | false |  |  |  |
| key | character varying | 256 | false |  |  |  |
| created_at | timestamp without time zone |  | true |  |  |  |
| updated_at | timestamp without time zone |  | true |  |  |  |
