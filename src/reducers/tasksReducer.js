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
      // This currently only works for leaf tasks,
      // deleting a parent won't delete it's children
      const newState = { ...state };
      const taskGid = action.meta.gid;

      var parentGid = null;
      if (newState.taskMap[taskGid].parent_task_gid != null) {
        var parentGid = newState.taskMap[taskGid].parent_task_gid;
      }

      //FIXME: We do not remove a task from state.recentlyAddTask

      return Object.assign({}, state, {
        taskMap: Object.keys(state.taskMap).reduce((acc, gid) => {
          if (gid !== taskGid) {
            acc[gid] = state.taskMap[gid];
          }

          if (parentGid !== null) {
            if (gid == parentGid) {
              acc[gid].subtask_gids = state.taskMap[gid].subtask_gids.filter(function(subtask_gid){
                if (subtask_gid !== taskGid) {
                  return subtask_gid;
                }
              });
            }
          }
          return acc;
        }, {}),
        rootTaskGids: state.rootTaskGids.filter(function(gid){
          if (gid !== taskGid) {
            return gid;
          }
        })
      });

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
