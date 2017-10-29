CREATE FUNCTION subtasks(parent_gid text, subtask_pursuance_id integer) RETURNS SETOF tasks AS $$
    SELECT * FROM tasks WHERE parent_task_gid IS NOT DISTINCT FROM parent_gid
                          AND pursuance_id IS NOT DISTINCT FROM subtask_pursuance_id
                     ORDER BY pursuance_id, id;
$$ LANGUAGE SQL STABLE;
ALTER FUNCTION subtasks(parent_gid text, subtask_pursuance_id integer) OWNER TO superuser;
