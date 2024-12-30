# Table: rollover_types

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| id | bigint |  | false | nextval('pam.rollover_types_id_seq'::regclass) | rollover_types | rollover_types |
| multiplier | double precision |  | false |  |  |  |
| created_at | timestamp without time zone |  | true |  |  |  |
| updated_at | timestamp without time zone |  | true |  |  |  |
| campaign_id | integer |  | false |  | rollover_types | campaigns |
| exclude_providers | json |  | true |  |  |  |
| provider_type_id | smallint |  | true |  | rollover_types | provider_types |
| days | smallint |  | true |  |  |  |
| include_deposit | boolean |  | true | false |  |  |
