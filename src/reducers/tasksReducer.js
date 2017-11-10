const initialState = {
  taskMap : {},
  rootTaskGids: [],
  recentlyAddedTask: null
}

export default function (state = initialState, action) {

  switch (action.type) {

    case 'GET_TASKS_PENDING':
      return state;

    case 'GET_TASKS_FULFILLED':
      const { taskMap, rootTaskGids } = action.payload;
      return Object.assign({}, state, {
        taskMap,
        rootTaskGids
      });

    case 'GET_TASKS_REJECTED':
      return state;

    case 'POST_TASK_PENDING':
      return state;

    case 'POST_TASK_FULFILLED':
      return Object.assign({}, state, {
        recentlyAddedTask: action.payload
      });

    case 'POST_TASK_REJECTED':
      return state;

    case 'DELETE_TASK_PENDING':
      return state;

    case 'DELETE_TASK_REJECTED':
      return state;

    case 'DELETE_TASK_FULFILLED':
      const newState = { ...state };
      const taskGid = action.meta.gid;

      if (newState.taskMap[taskGid].parent_task_gid != null) {
        var parentGid = newState.taskMap[taskGid].parent_task_gid;
        var parentNdx = newState.taskMap[parentGid].subtask_gids.indexOf(taskGid);
        newState.taskMap[parentGid].subtask_gids.splice(parentNdx, 1);
      }

      delete newState.taskMap[taskGid];
      var ndx = newState.rootTaskGids.indexOf(taskGid);
      if (ndx > -1) {
        newState.rootTaskGids.splice(ndx, 1);
      }

      if (newState.recentlyAddedTask.gid == taskGid) {
        // TODO: Depending on how this is used, we may want to replace it with the last "recently" created task
        newState.recentlyAddedTask = null;
      }

      return newState;

    case 'ADD_POSTED_ROOT_TASK':
      const { task } = action;
      return Object.assign({}, state, {
        rootTaskGids: [...state.rootTaskGids, task.gid],
        taskMap: Object.assign({}, state.taskMap, {
          [task.gid]: task
        })
      });

    case 'ADD_POSTED_SUB_TASK':
      const subTask = action.task;
      const parentTaskGid = subTask.parent_task_gid;
      const parentTask = state.taskMap[parentTaskGid];
      return Object.assign({}, state, {
        taskMap: Object.assign({}, state.taskMap, {
          [subTask.gid]: subTask,
          [parentTaskGid]: Object.assign({}, parentTask, {
            subtask_gids: [...parentTask.subtask_gids, subTask.gid]
          })
        })
      });

    default:
      return state
  }

}
