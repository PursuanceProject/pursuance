CREATE TABLE users (
    id                  serial PRIMARY KEY,
    username            text   NOT NULL UNIQUE CONSTRAINT proper_username CHECK (username ~ '^[a-z][a-z0-9._-]{0,45}$'),
    minilock_id         text   UNIQUE CHECK (40 <= LENGTH(minilock_id) AND LENGTH(minilock_id) <= 55),
    default_profile     json   NOT NULL DEFAULT '{}',
    default_profile_enc text   NOT NULL DEFAULT '',
    created             timestamp WITH time zone NOT NULL DEFAULT now()
);
ALTER TABLE users OWNER TO superuser;
