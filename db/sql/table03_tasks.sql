CREATE TABLE tasks (
    gid              text      NOT NULL UNIQUE,
    pursuance_id     integer   NOT NULL REFERENCES pursuances(id) ON DELETE CASCADE,
    id               serial    NOT NULL,
    title            text      NOT NULL CHECK (LENGTH(title) <= 200) DEFAULT '',
    title_enc        text      NOT NULL CHECK (LENGTH(title_enc) <= 2200) DEFAULT '',
    deliverables     text      NOT NULL CHECK (LENGTH(deliverables) <= 10000) DEFAULT '',
    deliverables_enc text      NOT NULL CHECK (LENGTH(deliverables_enc) <= 12000) DEFAULT '',
    assigned_to      text      REFERENCES users(username),
    due_date         timestamp WITH time zone,
    created          timestamp WITH time zone NOT NULL DEFAULT now(),
    parent_task_gid  text      REFERENCES tasks(gid),
    PRIMARY KEY (id, pursuance_id),
    CHECK ((LENGTH(title) > 0 OR LENGTH(title_enc) > 0)
            AND
            (LENGTH(title) = 0 OR LENGTH(title_enc) = 0)),
    CHECK (LENGTH(deliverables) = 0 OR LENGTH(deliverables_enc) = 0)
);
ALTER TABLE tasks OWNER TO superuser;

CREATE OR REPLACE FUNCTION set_task_gid() RETURNS trigger AS $$
DECLARE
    correct_gid text := NEW.pursuance_id::text || '_' || NEW.id::text;
BEGIN
    IF NEW.gid IS DISTINCT FROM correct_gid THEN
        NEW.gid := correct_gid;
    end IF;
    RETURN NEW;
END;
$$ LANGUAGE PLPGSQL;
ALTER FUNCTION set_task_gid() OWNER TO superuser;

CREATE TRIGGER trigger_set_task_gid
    BEFORE INSERT OR UPDATE ON tasks
    FOR EACH ROW
    EXECUTE PROCEDURE set_task_gid();

CREATE INDEX tasks_gid_idx ON tasks (gid);
ALTER INDEX tasks_gid_idx OWNER TO superuser;


CREATE FUNCTION subtasks(parent_gid text) RETURNS SETOF tasks AS $$
    SELECT * FROM tasks WHERE parent_task_gid IS NOT DISTINCT FROM parent_gid
                     ORDER BY pursuance_id, id;
$$ LANGUAGE SQL STABLE;
ALTER FUNCTION subtasks(parent_gid text) OWNER TO superuser;
