# Table: providers

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| id | smallint |  | false | nextval('pam.providers_id_seq'::regclass) | providers | providers |
| name | character varying | 50 | false |  |  |  |
| provider_type_id | smallint |  | true |  | providers | provider_types |
| status | boolean |  | true |  |  |  |
| tickets_table | character varying | 255 | true |  |  |  |
| games_table | boolean |  | true |  |  |  |
| image | character varying | 255 | true |  |  |  |
| route | character varying | 255 | true |  |  |  |
| logo | character varying | 255 | true |  |  |  |
| dotsuite_provider_id | smallint |  | true |  |  |  |
| betpay_id | bigint |  | true |  |  |  |
| images_path | character varying | 255 | true |  |  |  |
| square_size | character varying | 15 | true |  |  |  |
| rectangular_size | character varying | 15 | true |  |  |  |
| bg_image | character varying | 255 | true |  |  |  |
| provider_image | character varying | 255 | true |  |  |  |
| status_lobby | boolean |  | true |  |  |  |
