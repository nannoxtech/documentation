# Table: failed_jobs

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| id | bigint |  | false | nextval('wallet.failed_jobs_id_seq'::regclass) | failed_jobs | failed_jobs |
| connection | text |  | false |  |  |  |
| queue | text |  | false |  |  |  |
| payload | text |  | false |  |  |  |
| exception | text |  | false |  |  |  |
| failed_at | timestamp without time zone |  | false | CURRENT_TIMESTAMP |  |  |
