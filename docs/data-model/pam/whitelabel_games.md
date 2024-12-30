# Table: whitelabel_games

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| whitelabel_id | integer |  | false |  |  | whitelabels |
| game_id | integer |  | false |  |  | games |
| whitelabel_game_category_id | integer |  | false |  |  | whitelabel_games_categories |
| created_at | timestamp without time zone |  | true |  |  |  |
| updated_at | timestamp without time zone |  | true |  |  |  |
