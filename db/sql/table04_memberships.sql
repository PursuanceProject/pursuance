CREATE TABLE memberships (
    user_id          integer   NOT NULL REFERENCES users ON DELETE CASCADE,
    pursuance_id     integer   NOT NULL REFERENCES pursuances ON DELETE CASCADE,
    invited_by       integer   REFERENCES users ON DELETE CASCADE,
    created          timestamp WITH time zone NOT NULL DEFAULT now(),
    PRIMARY KEY (user_id, pursuance_id)
);
ALTER TABLE memberships OWNER TO superuser;
