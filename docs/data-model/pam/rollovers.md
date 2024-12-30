# Table: rollovers

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| campaign_id | integer |  | false |  | rollovers | campaigns |
| campaign_id | integer |  | false |  | rollovers | rollovers |
| campaign_id | integer |  | false |  | rollovers | rollovers |
| campaign_id | integer |  | false |  | rollovers | rollovers |
| rollover_type_id | smallint |  | false |  | rollovers | rollovers |
| rollover_type_id | smallint |  | false |  | rollovers | rollovers |
| rollover_type_id | smallint |  | false |  | rollovers | rollovers |
| rollover_type_id | smallint |  | false |  | rollovers | rollover_types |
| user_id | bigint |  | false |  | rollovers | rollovers |
| user_id | bigint |  | false |  | rollovers | rollovers |
| user_id | bigint |  | false |  | rollovers | rollovers |
| user_id | bigint |  | false |  | rollovers | users |
| total | double precision |  | false | '0'::double precision |  |  |
| deposit | double precision |  | true |  |  |  |
| status | smallint |  | false |  |  |  |
| created_at | timestamp without time zone |  | true |  |  |  |
| updated_at | timestamp without time zone |  | true |  |  |  |
| target | double precision |  | false |  |  |  |
| expiration_date | timestamp without time zone |  | true |  |  |  |
| bonus | double precision |  | true |  |  |  |
| final_amount | double precision |  | true |  |  |  |
| converted | double precision |  | true |  |  |  |
