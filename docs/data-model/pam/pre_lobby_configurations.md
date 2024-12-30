# Table: pre_lobby_configurations

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| id | integer |  | false | nextval('pam.pre_lobby_configurations_id_seq'::regclass) | pre_lobby_configurations | pre_lobby_configurations |
| template_element_id | integer |  | false |  | pre_lobby_configurations | template_elements |
| whitelabel_id | integer |  | false |  | pre_lobby_configurations | whitelabels |
| slug | character varying | 100 | false |  |  |  |
| data | json |  | true |  |  |  |
| created_at | timestamp without time zone |  | true |  |  |  |
| updated_at | timestamp without time zone |  | true |  |  |  |
