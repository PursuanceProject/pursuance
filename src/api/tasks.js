import * as postgrest from './postgrest';

export const postTaskReq = (task) => {
  return postgrest.postJSON('/tasks', task, {Prefer: 'return=representation'})
    .catch((err) => console.log('error posting task:', err))
}


export const getTasksReq = () => {
  return postgrest.getJSON(`/tasks?pursuance_id=eq.${currentPursuanceId}&order=created.asc,id.asc`)
    .then((tasks) => {
      const { taskMap, rootTaskGids } = buildTaskHierarchy(tasks);
    })
    .catch((err) => {
      console.log('Error fetching tasks:', err);
    });
}

buildTaskHierarchy = (tasks) => {
  const taskMap = {};
  const rootTaskGids = [];
  for (let i = 0; i < tasks.length; i++) {
    const t = tasks[i];
    taskMap[t[i].gid] = Object.assign(t[i], {subtask_gids: []});
    if (!t.parent_task_gid) {
      rootTaskGids.push(t.gid);
    } else {
      // Add t to its parent's subtasks
      taskMap[t.parent_task_gid].subtask_gids.push(t.gid)
    }
  }


  for (let i = 0; i < tasks.length; i++) {

    // If a task has no parents, it's a root task
  }

  return {
    taskMap,
    rootTaskGids
  };
}
