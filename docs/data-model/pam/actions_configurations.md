# Table: actions_configurations

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| action_id | smallint |  | false |  | actions_configurations | actions |
| currency_iso | character | 3 | false |  | actions_configurations | currencies |
| whitelabel_id | integer |  | false |  | actions_configurations | whitelabels |
| data | json |  | false |  |  |  |
| provider_type_id | smallint |  | true |  | actions_configurations | provider_types |
| exclude_providers | json |  | true |  |  |  |
| status | boolean |  | true | true |  |  |
| id | bigint |  | false | nextval('pam.actions_configurations_id_seq'::regclass) | actions_configurations | actions_configurations |
