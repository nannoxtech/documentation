# Table: tournament_ranking

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| id | bigint |  | false | nextval('pam.tournament_ranking_id_seq'::regclass) | tournament_ranking | tournament_ranking |
| user_id | bigint |  | false |  | tournament_ranking | users |
| whitelabel_id | integer |  | false |  | tournament_ranking | whitelabels |
| campaign_id | bigint |  | false |  | tournament_ranking | campaigns |
| currency_iso | character | 3 | false |  | tournament_ranking | currencies |
| provider_id | integer |  | false |  | tournament_ranking | providers |
| total | double precision |  | false |  |  |  |
| created_at | timestamp without time zone |  | true |  |  |  |
| updated_at | timestamp without time zone |  | true |  |  |  |
