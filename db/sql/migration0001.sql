CREATE OR REPLACE FUNCTION subtasks_recursive_flat(parent_gid text) RETURNS TABLE(gid text, pursuance_id integer, id integer, title text, title_enc text, deliverables text, deliverables_enc text, assigned_to text, due_date timestamp WITH time zone, created timestamp WITH time zone, parent_task_gid text) AS $$
    WITH RECURSIVE parent_task AS (
            SELECT *
            FROM tasks WHERE parent_task_gid IS NOT DISTINCT FROM parent_gid
        UNION ALL
            SELECT tasks.*
            FROM tasks, parent_task WHERE tasks.parent_task_gid IS NOT DISTINCT FROM parent_task.gid
    )
    SELECT *
    FROM parent_task;
$$ LANGUAGE SQL STABLE;
ALTER FUNCTION subtasks_recursive_flat(parent_gid text) OWNER TO superuser;
