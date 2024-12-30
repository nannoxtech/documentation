# Table: lobby_providers_whitelabels

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| whitelabel_id | integer |  | false |  |  | whitelabels |
| provider_id | smallint |  | false |  |  | providers |
| data | json |  | true |  |  |  |
| order | integer |  | false |  |  |  |
| route | character varying | 255 | true |  |  |  |
| status | boolean |  | false | true |  |  |
| created_at | timestamp without time zone |  | true |  |  |  |
| updated_at | timestamp without time zone |  | true |  |  |  |
