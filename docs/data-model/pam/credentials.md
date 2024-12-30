# Table: credentials

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| client_id | integer |  | false |  | credentials | whitelabels |
| client_id | integer |  | false |  | credentials | credentials |
| client_id | integer |  | false |  | credentials | credentials |
| client_id | integer |  | false |  | credentials | credentials |
| provider_id | smallint |  | false |  | credentials | credentials |
| provider_id | smallint |  | false |  | credentials | credentials |
| provider_id | smallint |  | false |  | credentials | credentials |
| provider_id | smallint |  | false |  | credentials | providers |
| currency_iso | character | 3 | false |  | credentials | currencies |
| currency_iso | character | 3 | false |  | credentials | credentials |
| currency_iso | character | 3 | false |  | credentials | credentials |
| currency_iso | character | 3 | false |  | credentials | credentials |
| data | json |  | true |  |  |  |
| created_at | timestamp without time zone |  | true |  |  |  |
| updated_at | timestamp without time zone |  | true |  |  |  |
| status | boolean |  | false | true |  |  |
| percentage | double precision |  | true |  |  |  |
| aggregator | boolean |  | false | false |  |  |
