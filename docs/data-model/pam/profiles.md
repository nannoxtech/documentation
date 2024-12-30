# Table: profiles

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| user_id | bigint |  | false |  | profiles | profiles |
| user_id | bigint |  | false |  | profiles | users |
| first_name | character varying | 255 | true |  |  |  |
| last_name | character varying | 255 | true |  |  |  |
| dni | character varying | 255 | true |  |  |  |
| gender | character | 1 | true |  |  |  |
| address | text |  | true |  |  |  |
| phone | character varying | 255 | true |  |  |  |
| birth_date | date |  | true |  |  |  |
| country_iso | character | 2 | false |  | profiles | countries |
| state | character varying | 255 | true |  |  |  |
| city | character varying | 255 | true |  |  |  |
| timezone | character varying | 255 | false |  |  |  |
| avatar | character varying | 255 | true |  |  |  |
| level | smallint |  | false |  |  |  |
| created_at | timestamp without time zone |  | true |  |  |  |
| updated_at | timestamp without time zone |  | true |  |  |  |
| calling_code | character varying | 20 | true |  |  |  |
| data | json |  | true |  |  |  |
| language | character | 5 | true |  |  |  |
| payments_country | character | 2 | true |  | profiles | countries |
| phone_token | character varying | 20 | true |  |  |  |
