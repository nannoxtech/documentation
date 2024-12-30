# Table: custom_lobby_games

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| game_id | integer |  | false |  | custom_lobby_games | games |
| game_id | integer |  | false |  | custom_lobby_games | custom_lobby_games |
| game_id | integer |  | false |  | custom_lobby_games | custom_lobby_games |
| whitelabel_id | integer |  | false |  | custom_lobby_games | custom_lobby_games |
| whitelabel_id | integer |  | false |  | custom_lobby_games | custom_lobby_games |
| whitelabel_id | integer |  | false |  | custom_lobby_games | whitelabels |
| created_at | timestamp without time zone |  | true |  |  |  |
| updated_at | timestamp without time zone |  | true |  |  |  |
| dotsuite_game_id | bigint |  | true |  | custom_lobby_games | dotsuite_games |
