# Table: dotsuite_free_spins

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| id | bigint |  | false | nextval('pam.dotsuite_free_spins_id_seq'::regclass) | dotsuite_free_spins | dotsuite_free_spins |
| created_at | timestamp without time zone |  | true |  |  |  |
| updated_at | timestamp without time zone |  | true |  |  |  |
| users | json |  | true |  |  |  |
| games_id | json |  | false |  |  |  |
| currency_iso | character varying | 3 | false |  | dotsuite_free_spins | currencies |
| whitelabel_id | integer |  | false |  | dotsuite_free_spins | whitelabels |
| provider_id | smallint |  | false |  | dotsuite_free_spins | providers |
| free_spins | integer |  | false |  |  |  |
| data | json |  | false |  |  |  |
| status | smallint |  | false |  |  |  |
| campaign_name | character varying | 255 | true |  |  |  |
| user_id | integer |  | true |  | dotsuite_free_spins | users |
