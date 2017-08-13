CREATE TABLE tasks (
    task_id          serial    NOT NULL,
    pursuance_id     integer   NOT NULL REFERENCES pursuances ON DELETE CASCADE,
    title            text      NOT NULL CHECK (LENGTH(title) <= 100) DEFAULT '',
    title_enc        text      NOT NULL CHECK (LENGTH(title_enc) <= 2100) DEFAULT '',
    description      text      NOT NULL CHECK (LENGTH(description) <= 10000) DEFAULT '',
    description_enc  text      NOT NULL CHECK (LENGTH(description_enc) <= 12000) DEFAULT '',
    deliverables     text      NOT NULL CHECK (LENGTH(deliverables) <= 2000) DEFAULT '',
    deliverables_enc text      NOT NULL CHECK (LENGTH(deliverables_enc) <= 4000) DEFAULT '',
    assignee         integer   REFERENCES users,
    created          timestamp WITH time zone NOT NULL DEFAULT now(),
    PRIMARY KEY (task_id, pursuance_id)
);
ALTER TABLE tasks OWNER TO superuser;
