import * as postgrest from './postgrest';
import { isRootTaskInPursuance } from '../utils/tasks';

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
      `/tasks?or=(pursuance_id.eq.${pursuanceId},assigned_to_pursuance_id.eq.${pursuanceId})&order=created.asc,id.asc` +
        (includeArchived ? '' : '&is_archived=is.false')
    )
    .then(tasks => {
      const { taskMap, rootTaskGids } = buildTaskHierarchy(tasks, pursuanceId);
      return { taskMap, rootTaskGids };
    })
    .catch(err => {
      console.log('Error fetching tasks:', err);
    });
};

const buildTaskHierarchy = (tasks, pursuanceId) => {
  const taskMap = {};
  const rootTaskGids = [];
  for (let i = 0; i < tasks.length; i++) {
    const t = tasks[i];
    taskMap[t.gid] = Object.assign(t, { subtask_gids: [] });

    if (isRootTaskInPursuance(t, pursuanceId)) {
      rootTaskGids.push(t.gid);
    } else {
      // Add t to its parent's subtasks
      taskMap[t.parent_task_gid].subtask_gids.push(t.gid);
    }
  }

  const pursuanceIdStr = pursuanceId + '_';
  // Put root tasks assigned to pursuanceId from another pursuance
  // _after_ the root task(s) from pursuanceId.
  rootTaskGids.sort(sortGidsBy(pursuanceIdStr));

  return {
    taskMap,
    rootTaskGids
  };
};

const sortGidsBy = (pursuanceIdStr) => {
  return (g1, g2) => {
    if (g1.startsWith(pursuanceIdStr)) {
      return -1000;
    }
    return g2.localeCompare(g1);
  }
}
