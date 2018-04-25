CREATE TABLE users (
    username            text   PRIMARY KEY CONSTRAINT proper_username CHECK (username ~ '^[a-z][a-z0-9._-]{0,45}$'),
    minilock_id         text   NOT NULL DEFAULT '',
    default_profile     json   NOT NULL DEFAULT '{}',
    default_profile_enc text   NOT NULL DEFAULT '',
    created             timestamp WITH time zone NOT NULL DEFAULT now()
    /* email_id uuid */
);
ALTER TABLE users OWNER TO superuser;
