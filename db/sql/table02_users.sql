CREATE TABLE users (
    id                  serial PRIMARY KEY,
    created             timestamp WITH time zone NOT NULL DEFAULT now(),
    default_profile     json,
    default_profile_enc json,
    minilock_id         text   UNIQUE CHECK (40 <= LENGTH(minilock_id) AND LENGTH(minilock_id) <= 55)
);
ALTER TABLE users OWNER TO superuser;
