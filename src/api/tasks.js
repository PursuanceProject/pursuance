import * as postgrest from './postgrest';

export const postTaskReq = task => {
  return postgrest
    .postJSON('/tasks', task, { Prefer: 'return=representation' })
    .then(taskJSON => taskJSON[0])
    .catch(err => console.log('Error posting task:', err));
};

export const patchTaskReq = task => {
  return postgrest
    .patchJSON(`/tasks?gid=eq.${task.gid}`, task, {
      Prefer: 'return=representation'
    })
    .then(taskJSON => taskJSON[0])
    .catch(err => console.log('Error patching task:', err));
};

export const deleteTaskReq = task => {
  return postgrest
    .deleteJSON(`/tasks?gid=eq.${task.gid}`, { Prefer: 'return=representation' })
    .then(taskJSON => taskJSON[0])
    .catch(err => console.log('Error deleting task:', err));
}

export const getTasksReq = (pursuanceId, { includeArchived = false } = {}) => {
  return postgrest
    .getJSON(
      `/tasks?pursuance_id=eq.${pursuanceId}&order=created.asc,id.asc` +
        (includeArchived ? '' : '&is_archived=eq.false')
    )
    .then(tasks => {
      const { taskMap, rootTaskGids } = buildTaskHierarchy(tasks);
      return { taskMap, rootTaskGids };
    })
    .catch(err => {
      console.log('Error fetching tasks:', err);
    });
};

const buildTaskHierarchy = tasks => {
  const taskMap = {};
  const rootTaskGids = [];
  console.log(tasks);
  for (let i = 0; i < tasks.length; i++) {
    const t1 = tasks[i];
    taskMap[t1.gid] = Object.assign(t1, { subtask_gids: [] });
  }
  for (let i = 0; i < tasks.length; i++) {
    const t2 = tasks[i];

    if (!t2.parent_task_gid) {
      rootTaskGids.push(t2.gid);
    } else {
      // Add t to its parent's subtasks
      taskMap[t2.parent_task_gid].subtask_gids.push(t2.gid);
    }
  }
  return {
    taskMap,
    rootTaskGids
  };
};
