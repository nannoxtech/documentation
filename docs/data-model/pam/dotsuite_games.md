# Table: dotsuite_games

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| id | integer |  | false | nextval('pam.dotsuite_games_id_seq'::regclass) | dotsuite_games | dotsuite_games |
| name | character varying | 255 | false |  |  |  |
| slug | character varying | 255 | false |  |  |  |
| image | character varying | 255 | true |  |  |  |
| maker | character varying | 30 | false |  |  |  |
| provider_game_id | character varying | 255 | false |  |  |  |
| status | smallint |  | false |  |  |  |
| category | character varying | 255 | true |  |  |  |
| provider_id | smallint |  | false |  | dotsuite_games | providers |
| created_at | timestamp without time zone |  | true |  |  |  |
| updated_at | timestamp without time zone |  | true |  |  |  |
| types | character varying | 255 | false |  |  |  |
| game | character varying | 255 | true |  |  |  |
| order | integer |  | true |  |  |  |
