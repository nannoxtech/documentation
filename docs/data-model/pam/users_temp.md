# Table: users_temp

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| username | character varying | 255 | false |  | users_temp | users_temp |
| username | character varying | 255 | false |  | users_temp | users_temp |
| username | character varying | 255 | false |  | users_temp | users_temp |
| email | character varying | 255 | false |  | users_temp | users_temp |
| email | character varying | 255 | false |  | users_temp | users_temp |
| email | character varying | 255 | false |  | users_temp | users_temp |
| password | character varying | 60 | false |  |  |  |
| token | uuid |  | false |  |  |  |
| ip | inet |  | false |  |  |  |
| currency_iso | character | 3 | false |  |  |  |
| whitelabel_id | smallint |  | false |  | users_temp | users_temp |
| whitelabel_id | smallint |  | false |  | users_temp | users_temp |
| whitelabel_id | smallint |  | false |  | users_temp | users_temp |
| created_at | timestamp without time zone |  | true |  |  |  |
| updated_at | timestamp without time zone |  | true |  |  |  |
| referral_id | bigint |  | true |  |  |  |
| calling_code | character varying | 20 | true |  |  |  |
| phone | character varying | 255 | true |  |  |  |
| promo_code | character varying | 100 | true |  |  |  |
| birth_date | date |  | true |  |  |  |
| data | json |  | true |  |  |  |
| btag | character varying | 255 | true |  |  |  |
| language | character | 5 | true |  |  |  |
| first_name | character varying | 255 | true |  |  |  |
| last_name | character varying | 255 | true |  |  |  |
| dni | character varying | 255 | true |  |  |  |
| gender | character | 1 | true |  |  |  |
| country_iso | character | 2 | true |  |  |  |
| city | character varying | 255 | true |  |  |  |
