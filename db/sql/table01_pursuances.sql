CREATE TABLE pursuances (
    id              serial    NOT NULL UNIQUE PRIMARY KEY,
    minilock_id     text      UNIQUE CHECK (40 <= LENGTH(minilock_id) AND LENGTH(minilock_id) <= 55),
    name            text      NOT NULL CHECK (LENGTH(name) <= 100) DEFAULT '',
    name_enc        text      NOT NULL CHECK (LENGTH(name_enc) <= 2100) DEFAULT '',
    description     text      NOT NULL CHECK (LENGTH(description) <= 10000) DEFAULT '',
    description_enc text      NOT NULL CHECK (LENGTH(description_enc) <= 12000) DEFAULT '',
    is_encrypted    bool      NOT NULL,
    created         timestamp WITH time zone NOT NULL DEFAULT now()
);
ALTER TABLE pursuances OWNER TO superuser;
