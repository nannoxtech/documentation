# Table: currencies

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| iso | character | 3 | false |  | currencies | currencies |
| name | character varying | 100 | false |  |  |  |
| created_at | timestamp without time zone |  | true |  |  |  |
| updated_at | timestamp without time zone |  | true |  |  |  |
| credit_limit | double precision |  | true |  |  |  |
| translations | json |  | true |  |  |  |
