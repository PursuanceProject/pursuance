CREATE TABLE pursuances (
    pursuance_id    serial    NOT NULL UNIQUE PRIMARY KEY,
    minilock_id     text      UNIQUE CHECK (40 <= LENGTH(minilock_id) AND LENGTH(minilock_id) <= 55),
    parent_id       integer   REFERENCES pursuances,
    name            text      NOT NULL CHECK (LENGTH(name) <= 100) DEFAULT '',
    name_enc        text      NOT NULL CHECK (LENGTH(name_enc) <= 2100) DEFAULT '',
    description     text      NOT NULL CHECK (LENGTH(description) <= 10000) DEFAULT '',
    description_enc text      NOT NULL CHECK (LENGTH(description_enc) <= 12000) DEFAULT '',
    created         timestamp WITH time zone NOT NULL DEFAULT now()
);
ALTER TABLE pursuances OWNER TO superuser;

CREATE FUNCTION is_encrypted(pursuances) RETURNS bool AS $$
  SELECT $1.minilock_id IS NOT NULL;
$$ LANGUAGE SQL;
ALTER FUNCTION is_encrypted(pursuances) OWNER TO superuser;

CREATE INDEX pursuances_is_encrypted_idx ON pursuances (is_encrypted(pursuances));
ALTER INDEX pursuances_is_encrypted_idx OWNER TO superuser;
