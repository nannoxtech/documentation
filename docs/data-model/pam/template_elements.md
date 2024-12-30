# Table: template_elements

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| id | integer |  | false | nextval('pam.template_elements_id_seq'::regclass) | template_elements | template_elements |
| name | character varying | 50 | false |  |  |  |
| data | json |  | true |  |  |  |
| element_type_id | smallint |  | false |  | template_elements | template_elements |
| created_at | timestamp without time zone |  | true |  |  |  |
| updated_at | timestamp without time zone |  | true |  |  |  |
