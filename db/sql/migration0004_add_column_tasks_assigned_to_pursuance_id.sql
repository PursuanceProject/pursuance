ALTER TABLE tasks
    ADD COLUMN assigned_to_pursuance_id integer REFERENCES pursuances(id);
