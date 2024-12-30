# Table: lobby_dotsuite_whitelabels

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| dotsuite_game_id | integer |  | false |  | lobby_dotsuite_whitelabels | dotsuite_games |
| dotsuite_game_id | integer |  | false |  | lobby_dotsuite_whitelabels | lobby_dotsuite_whitelabels |
| dotsuite_game_id | integer |  | false |  | lobby_dotsuite_whitelabels | lobby_dotsuite_whitelabels |
| whitelabel_id | integer |  | false |  | lobby_dotsuite_whitelabels | lobby_dotsuite_whitelabels |
| whitelabel_id | integer |  | false |  | lobby_dotsuite_whitelabels | lobby_dotsuite_whitelabels |
| whitelabel_id | integer |  | false |  | lobby_dotsuite_whitelabels | whitelabels |
| data | json |  | true |  |  |  |
| order | integer |  | false |  |  |  |
| route | character varying | 255 | true |  |  |  |
| created_at | timestamp without time zone |  | true |  |  |  |
| updated_at | timestamp without time zone |  | true |  |  |  |
| image | character varying | 255 | true |  |  |  |
| name | character varying | 255 | true |  |  |  |
