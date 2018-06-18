CREATE TABLE task_lists (
    pursuance_ids    integer[] NOT NULL DEFAULT '{}',
    task_gids        text[]    NOT NULL DEFAULT '{}',
    id               serial    NOT NULL PRIMARY KEY,
    name             text      NOT NULL CHECK (LENGTH(name) <= 200) DEFAULT '',
    name_enc         text      NOT NULL CHECK (LENGTH(name_enc) <= 2200) DEFAULT '',
    description      text      NOT NULL CHECK (LENGTH(description) <= 10000) DEFAULT '',
    description_enc  text      NOT NULL CHECK (LENGTH(description_enc) <= 12000) DEFAULT '',
    assigned_to      text      REFERENCES users(username),
    assigned_to_pursuance_id integer REFERENCES pursuances(id),
    due_date         timestamp WITH time zone,
    created          timestamp WITH time zone NOT NULL DEFAULT now(),
    CHECK ((LENGTH(name) > 0 AND LENGTH(name_enc) = 0)
           OR
           (LENGTH(name) = 0 AND LENGTH(name_enc) > 0)),
    CHECK (LENGTH(description) = 0 OR LENGTH(description_enc) = 0)
);
ALTER TABLE task_lists OWNER TO superuser;

CREATE EXTENSION IF NOT EXISTS intarray;

CREATE INDEX task_lists_pursuance_ids_idx ON task_lists USING GIN(pursuance_ids gin__int_ops);
CREATE INDEX task_lists_task_gids_idx ON task_lists USING GIN(task_gids);

CREATE OR REPLACE FUNCTION set_task_list_pursuance_ids() RETURNS TRIGGER AS $$
DECLARE
    gid text;
    p_id int;
    task_pursuance_ids int[] := '{}';
BEGIN
    FOREACH gid IN ARRAY NEW.task_gids
    LOOP
        /* Python equivalent: int(gid.split('_')[0]) */
        p_id := (string_to_array(gid, '_'))[1]::int;
        IF NOT p_id = ANY(task_pursuance_ids) THEN
            task_pursuance_ids := array_append(task_pursuance_ids, p_id);
        END IF;
    END LOOP;
    NEW.pursuance_ids := task_pursuance_ids;
    RETURN NEW;
END;
$$ LANGUAGE PLPGSQL;
ALTER FUNCTION set_task_list_pursuance_ids() OWNER TO superuser;

CREATE TRIGGER trigger_set_task_list_pursuance_ids
    BEFORE INSERT OR UPDATE ON task_lists
    FOR EACH ROW
    EXECUTE PROCEDURE set_task_list_pursuance_ids();
