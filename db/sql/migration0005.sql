CREATE INDEX tasks_parent_gid_idx ON tasks (parent_task_gid);
ALTER INDEX tasks_parent_gid_idx OWNER TO superuser;
