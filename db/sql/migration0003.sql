CREATE OR REPLACE FUNCTION subtasks_recursive_flat(parent_gid text, subtask_pursuance_id integer) RETURNS TABLE(gid text, pursuance_id integer, id integer, title text, title_enc text, deliverables text, deliverables_enc text, assigned_to text, created timestamp WITH time zone) AS $$
    WITH RECURSIVE parent_task AS (
            SELECT gid, pursuance_id, id, title, title_enc,
                   deliverables, deliverables_enc, assigned_to, created
            FROM tasks WHERE parent_task_gid IS NOT DISTINCT FROM parent_gid
                         AND pursuance_id IS NOT DISTINCT FROM subtask_pursuance_id
        UNION ALL
            SELECT tasks.gid, tasks.pursuance_id, tasks.id, tasks.title, tasks.title_enc,
                   tasks.deliverables, tasks.deliverables_enc, tasks.assigned_to, tasks.created
            FROM tasks, parent_task WHERE tasks.parent_task_gid IS NOT DISTINCT FROM parent_task.gid
                                      AND tasks.pursuance_id IS NOT DISTINCT FROM parent_task.pursuance_id
    )
    SELECT gid, pursuance_id, id, title, title_enc,
           deliverables, deliverables_enc, assigned_to, created
    FROM parent_task;
$$ LANGUAGE SQL STABLE;
ALTER FUNCTION subtasks_recursive_flat(parent_gid text, subtask_pursuance_id integer) OWNER TO superuser;
