# Table: campaign_allocation_criteria

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| id | smallint |  | false | nextval('pam.campaign_types_id_seq'::regclass) | campaign_allocation_criteria | campaign_allocation_criteria |
| name | character varying | 100 | false |  |  |  |
| show | boolean |  | true | false |  |  |
