CREATE TABLE tasks (
    id               serial    NOT NULL,
    pursuance_id     integer   NOT NULL REFERENCES pursuances ON DELETE CASCADE,
    title            text      NOT NULL CHECK (LENGTH(title) <= 200) DEFAULT '',
    title_enc        text      NOT NULL CHECK (LENGTH(title_enc) <= 2200) DEFAULT '',
    deliverables     text      NOT NULL CHECK (LENGTH(deliverables) <= 10000) DEFAULT '',
    deliverables_enc text      NOT NULL CHECK (LENGTH(deliverables_enc) <= 12000) DEFAULT '',
    assigned_to      integer   REFERENCES users,
    created          timestamp WITH time zone NOT NULL DEFAULT now(),
    PRIMARY KEY (id, pursuance_id),
    CHECK ((LENGTH(title) > 0 OR LENGTH(title_enc) > 0)
            AND
            (LENGTH(title) = 0 OR LENGTH(title_enc) = 0)),
    CHECK (LENGTH(deliverables) = 0 OR LENGTH(deliverables_enc) = 0)
);
ALTER TABLE tasks OWNER TO superuser;
