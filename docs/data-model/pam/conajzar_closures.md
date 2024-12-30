# Table: conajzar_closures

**Description**: No description available

| Column Name | Data Type | Max Length | Is Nullable | Default | Primary Key | Foreign Key |
|-------------|-----------|------------|-------------|---------|-------------|-------------|
| id | bigint |  | false | nextval('pam.conajzar_closures_id_seq'::regclass) | conajzar_closures | conajzar_closures |
| played | double precision |  | false |  |  |  |
| won | double precision |  | false |  |  |  |
| profit | double precision |  | false |  |  |  |
| bets | integer |  | false |  |  |  |
| games | integer |  | false |  |  |  |
| users | integer |  | false |  |  |  |
| currency_iso | character | 3 | false |  |  |  |
| whitelabel_id | integer |  | false |  |  |  |
| start_date | timestamp without time zone |  | false |  |  |  |
| end_date | timestamp without time zone |  | false |  |  |  |
| created_at | timestamp without time zone |  | true |  |  |  |
| updated_at | timestamp without time zone |  | true |  |  |  |
