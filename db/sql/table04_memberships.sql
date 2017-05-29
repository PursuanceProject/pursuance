CREATE TABLE memberships (
    user_id          text      NOT NULL REFERENCES users ON DELETE CASCADE,
    pursuance_id     integer   NOT NULL REFERENCES pursuances ON DELETE CASCADE,
    invited_by       text      REFERENCES users ON DELETE CASCADE,
    joined           timestamp WITH time zone NOT NULL DEFAULT now(),
    PRIMARY KEY (user_id, pursuance_id)
);
ALTER TABLE memberships OWNER TO superuser;
