# Table: games

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| id | integer |  | false | nextval('pam.ocb_slots_games_id_seq'::regclass) | games | games |
| name | character varying | 255 | false |  |  |  |
| slug | character varying | 255 | false |  |  |  |
| image | character varying | 255 | true |  |  |  |
| maker | character varying | 20 | false |  |  |  |
| provider_game_id | character varying | 255 | false |  |  |  |
| type | character varying | 15 | true |  |  |  |
| status | smallint |  | false |  |  |  |
| mobile | boolean |  | false |  |  |  |
| fun | boolean |  | false |  |  |  |
| new | boolean |  | true |  |  |  |
| category | character varying | 255 | true |  |  |  |
| created_at | timestamp without time zone |  | true |  |  |  |
| updated_at | timestamp without time zone |  | true |  |  |  |
| provider_id | smallint |  | false |  | games | providers |
| provider_additional_id | character varying | 255 | true |  |  |  |
| order | integer |  | true |  |  |  |
