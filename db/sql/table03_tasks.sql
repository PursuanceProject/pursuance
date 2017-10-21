CREATE TABLE tasks (
    id               serial    NOT NULL,
    pursuance_id     integer   NOT NULL REFERENCES pursuances ON DELETE CASCADE,
    title            text      NOT NULL CHECK (LENGTH(title) <= 200) DEFAULT '',
    title_enc        text      NOT NULL CHECK (LENGTH(title_enc) <= 2200) DEFAULT '',
    deliverables     text      NOT NULL CHECK (LENGTH(deliverables) <= 10000) DEFAULT '',
    deliverables_enc text      NOT NULL CHECK (LENGTH(deliverables_enc) <= 12000) DEFAULT '',
    assigned_to      integer   REFERENCES users,
    created          timestamp WITH time zone NOT NULL DEFAULT now(),
    parent_task_id   integer,
    parent_task_pursuance_id integer,
    FOREIGN KEY (parent_task_id, parent_task_pursuance_id) REFERENCES tasks(id, pursuance_id) ON DELETE SET NULL,
    PRIMARY KEY (id, pursuance_id),
    CHECK ((LENGTH(title) > 0 OR LENGTH(title_enc) > 0)
            AND
            (LENGTH(title) = 0 OR LENGTH(title_enc) = 0)),
    CHECK (LENGTH(deliverables) = 0 OR LENGTH(deliverables_enc) = 0)
);
ALTER TABLE tasks OWNER TO superuser;

CREATE OR REPLACE FUNCTION set_default_parent_task_pursuance_id() RETURNS trigger AS $$
BEGIN
    IF NEW.parent_task_pursuance_id IS NULL THEN
        NEW.parent_task_pursuance_id := NEW.pursuance_id;
    end IF;
    RETURN NEW;
END;
$$ LANGUAGE PLPGSQL;
ALTER FUNCTION set_default_parent_task_pursuance_id() OWNER TO superuser;

CREATE TRIGGER trigger_set_default_parent_task_pursuance_id
    BEFORE INSERT OR UPDATE ON tasks
    FOR EACH ROW
    EXECUTE PROCEDURE set_default_parent_task_pursuance_id();


CREATE FUNCTION subtasks(parent_id integer, parent_pursuance_id integer) RETURNS SETOF tasks AS $$
  SELECT * FROM tasks WHERE parent_task_id = parent_id
                        AND parent_task_pursuance_id = parent_pursuance_id
                   ORDER BY pursuance_id, id;
$$ LANGUAGE SQL STABLE;
ALTER FUNCTION subtasks(parent_id integer, parent_pursuance_id integer) OWNER TO superuser;
