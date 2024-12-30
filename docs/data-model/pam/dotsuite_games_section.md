# Table: dotsuite_games_section

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| id | bigint |  | false | nextval('pam.dotsuite_games_section_id_seq'::regclass) | dotsuite_games_section | dotsuite_games_section |
| section | character varying | 50 | false |  |  |  |
| additional_info | character varying | 50 | true |  |  |  |
| dotsuite_game_id | integer |  | false |  | dotsuite_games_section | dotsuite_games |
| whitelabel_id | integer |  | false |  | dotsuite_games_section | whitelabels |
| created_at | timestamp without time zone |  | true |  |  |  |
| updated_at | timestamp without time zone |  | true |  |  |  |
