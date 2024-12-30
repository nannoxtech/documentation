# Table: action_dotsuite_games

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| id | bigint |  | false | nextval('pam.action_dotsuite_games_id_seq'::regclass) | action_dotsuite_games | action_dotsuite_games |
| dotsuite_game_id | integer |  | false |  | action_dotsuite_games | dotsuite_games |
| whitelabel_id | integer |  | false |  | action_dotsuite_games | whitelabels |
| type | smallint |  | true |  |  |  |
| created_at | timestamp without time zone |  | true |  |  |  |
| updated_at | timestamp without time zone |  | true |  |  |  |
