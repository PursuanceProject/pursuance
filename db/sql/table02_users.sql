CREATE TABLE users (
    user_id text      NOT NULL UNIQUE PRIMARY KEY CHECK (40 <= LENGTH(user_id) AND LENGTH(user_id) <= 55),
    created timestamp WITH time zone NOT NULL DEFAULT now()
);
ALTER TABLE users OWNER TO superuser;
