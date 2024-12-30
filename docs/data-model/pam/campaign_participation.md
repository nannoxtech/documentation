# Table: campaign_participation

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| campaign_id | bigint |  | false |  | campaign_participation | campaigns |
| campaign_id | bigint |  | false |  | campaign_participation | campaign_participation |
| campaign_id | bigint |  | false |  | campaign_participation | campaign_participation |
| user_id | bigint |  | false |  | campaign_participation | campaign_participation |
| user_id | bigint |  | false |  | campaign_participation | campaign_participation |
| user_id | bigint |  | false |  | campaign_participation | users |
| participation_status_id | smallint |  | false |  | campaign_participation | campaign_participation_status |
| created_at | timestamp without time zone |  | true |  |  |  |
| updated_at | timestamp without time zone |  | true |  |  |  |
