# Table: game_section

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| id | bigint |  | false | nextval('pam.game_section_id_seq'::regclass) | game_section | game_section |
| section | character varying | 50 | false |  |  |  |
| additional_info | character varying | 50 | true |  |  |  |
| whitelabel_id | integer |  | false |  | game_section | whitelabels |
| game_id | integer |  | true |  | game_section | games |
| created_at | timestamp without time zone |  | true |  |  |  |
| updated_at | timestamp without time zone |  | true |  |  |  |
| dotsuite_game_id | integer |  | true |  | game_section | dotsuite_games |
| element_type_id | smallint |  | true |  |  |  |
