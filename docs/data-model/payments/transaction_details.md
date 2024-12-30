# Table: transaction_details

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| transaction_id | bigint |  | false |  | transaction_details | transaction_details |
| transaction_id | bigint |  | false |  | transaction_details | transaction_details |
| transaction_id | bigint |  | false |  | transaction_details | transactions |
| transaction_status_id | smallint |  | false |  | transaction_details | transaction_details |
| transaction_status_id | smallint |  | false |  | transaction_details | transaction_details |
| transaction_status_id | smallint |  | false |  | transaction_details | transaction_status |
| data | json |  | true |  |  |  |
| created_at | timestamp without time zone |  | true |  |  |  |
| updated_at | timestamp without time zone |  | true |  |  |  |
