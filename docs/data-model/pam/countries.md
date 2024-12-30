# Table: countries

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| iso | character | 2 | false |  | countries | countries |
| name | character varying | 255 | false |  |  |  |
| created_at | timestamp without time zone |  | true |  |  |  |
| updated_at | timestamp without time zone |  | true |  |  |  |
| calling_code | character varying | 20 | true |  |  |  |
| dni_regex | character varying | 255 | true |  |  |  |
| dni_format_examples | json |  | true |  |  |  |
| dni_name | character varying | 255 | true |  |  |  |
| alfa3 | character | 3 | true |  |  |  |
