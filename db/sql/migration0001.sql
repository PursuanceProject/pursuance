CREATE FUNCTION subtasks_recursive_flat(parent_gid text) RETURNS TABLE(gid text, pursuance_id integer, id integer, title text, title_enc text, deliverables text, deliverables_enc text, assigned_to text, created timestamp WITH time zone) AS $$
    WITH RECURSIVE parent_task AS (
            SELECT gid, pursuance_id, id, title, title_enc,
                   deliverables, deliverables_enc, assigned_to, created
            FROM tasks WHERE parent_task_gid IS NOT DISTINCT FROM parent_gid
        UNION ALL
            SELECT tasks.gid, tasks.pursuance_id, tasks.id, tasks.title, tasks.title_enc,
                   tasks.deliverables, tasks.deliverables_enc, tasks.assigned_to, tasks.created
            FROM tasks, parent_task WHERE tasks.parent_task_gid IS NOT DISTINCT FROM parent_task.gid
    )
    SELECT gid, pursuance_id, id, title, title_enc,
           deliverables, deliverables_enc, assigned_to, created
    FROM parent_task
    ORDER BY pursuance_id, id;
$$ LANGUAGE SQL STABLE;
ALTER FUNCTION subtasks_recursive_flat(parent_gid text) OWNER TO superuser;
