CREATE TABLE memberships (
    user_username    text      NOT NULL REFERENCES users(username) ON DELETE CASCADE,
    pursuance_id     integer   NOT NULL REFERENCES pursuances ON DELETE CASCADE,
    invited_by       text      REFERENCES users ON DELETE CASCADE,
    created          timestamp WITH time zone NOT NULL DEFAULT now(),
    PRIMARY KEY (user_username, pursuance_id)
);
ALTER TABLE memberships OWNER TO superuser;
