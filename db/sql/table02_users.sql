CREATE TABLE users (
    id              serial PRIMARY KEY,
    created         timestamp WITH time zone NOT NULL DEFAULT now(),
    default_profile json
);
ALTER TABLE users OWNER TO superuser;
