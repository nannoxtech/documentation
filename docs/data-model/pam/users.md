# Table: users

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| id | bigint |  | false | nextval('pam.users_id_seq'::regclass) | users | users |
| username | character varying | 25 | false |  |  |  |
| email | character varying | 255 | false |  |  |  |
| password | character varying | 255 | false |  |  |  |
| uuid | uuid |  | false |  |  |  |
| status | boolean |  | false | true |  |  |
| ip | inet |  | false |  |  |  |
| whitelabel_id | integer |  | false |  | users | whitelabels |
| wallet_access_token | text |  | true |  |  |  |
| remember_token | character varying | 100 | true |  |  |  |
| created_at | timestamp without time zone |  | true |  |  |  |
| updated_at | timestamp without time zone |  | true |  |  |  |
| tester | boolean |  | false | false |  |  |
| web_register | boolean |  | false | true |  |  |
| referral_code | character varying | 100 | true |  |  |  |
| promo_code | character varying | 100 | true |  |  |  |
| last_deposit_amount | double precision |  | true |  |  |  |
| last_debit_amount | double precision |  | true |  |  |  |
| last_deposit_currency | character | 3 | true |  |  |  |
| last_debit_currency | character | 3 | true |  |  |  |
| last_login | timestamp without time zone |  | true |  |  |  |
| last_deposit | timestamp without time zone |  | true |  |  |  |
| last_debit | timestamp without time zone |  | true |  |  |  |
| main | boolean |  | false | false |  |  |
| btag | character varying | 255 | true |  |  |  |
| first_deposit | timestamp without time zone |  | true |  |  |  |
| first_deposit_amount | double precision |  | true |  |  |  |
| first_deposit_currency | character | 3 | true |  |  |  |
| first_debit_amount | double precision |  | true |  |  |  |
| first_debit_currency | character | 3 | true |  |  |  |
| first_debit | timestamp without time zone |  | true |  |  |  |
| register_currency | character | 3 | true |  | users | currencies |
| login_attempts | smallint |  | false | '0'::smallint |  |  |
| bonus | boolean |  | false | true |  |  |
