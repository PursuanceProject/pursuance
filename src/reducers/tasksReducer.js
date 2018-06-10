const initialState = {
  taskMap: {},
  rootTaskGids: [],
  recentlyAddedTask: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'GET_TASKS_PENDING':
      return state;

    case 'GET_TASKS_FULFILLED':
      const { taskMap, rootTaskGids } = action.payload;
      return Object.assign({}, state, {
        taskMap: Object.assign({}, state.taskMap, taskMap),
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

    case 'PATCH_TASK_PENDING':
      return state;

    case 'TASK_SET_ASSIGNEE_FULFILLED':
      // Fallthrough
    case 'PATCH_TASK_FULFILLED':
      const patchedTask = action.payload;
      patchedTask.subtask_gids =
        state.taskMap[patchedTask.gid].subtask_gids || [];
      return Object.assign({}, state, {
        taskMap: Object.assign({}, state.taskMap, {
          [patchedTask.gid]: patchedTask
        })
      });

    case 'TASK_ARCHIVE_FULFILLED': {
      const archivedTask = action.payload;

      // Create new taskMap that excludes the task just archived
      const newTaskMap = Object.assign({}, state.taskMap);
      delete newTaskMap[archivedTask.gid];

      const parentTaskGid = archivedTask.parent_task_gid;
      if (!parentTaskGid) {
        return Object.assign({}, state, {
          taskMap: newTaskMap
        })
      }
      const parentTask = state.taskMap[parentTaskGid];
      // Update parentTask.subtask_gids in redux so that it excludes
      // archivedTask.gid
      const newParentSubtaskGids =
        parentTask.subtask_gids.filter((gid) => gid !== archivedTask.gid)
      return Object.assign({}, state, {
        taskMap: Object.assign(newTaskMap, {
          [parentTaskGid]: {
            ...parentTask,
            subtask_gids: newParentSubtaskGids
          }
        })
      });
    }

    case 'TASK_FORM_SET_PARENT_GID': {
      const { formId, newParentGid, oldParentGid } = action;
      const newParent = state.taskMap[newParentGid];
      const oldParent = state.taskMap[oldParentGid];
      return Object.assign({}, state, {
        taskMap: Object.assign({}, state.taskMap, {
          [newParentGid]: Object.assign({}, newParent, {
            subtaskform_id: formId
          }),
          [oldParentGid]: Object.assign({}, oldParent, {
            subtaskform_id: null
          })
        })
      });
    }

    case 'TASK_FORM_ADD_TO_HIERARCHY': {
      const { parentTaskGid, taskFormId } = action;
      const parentTask = state.taskMap[parentTaskGid];
      return Object.assign({}, state, {
        taskMap: Object.assign({}, state.taskMap, {
          [parentTaskGid]: Object.assign({}, parentTask, {
            subtaskform_id: taskFormId
          })
        })
      });
    }

    case 'TASK_FORM_REMOVE_FROM_HIERARCHY': {
      const { parentTaskGid } = action;
      const parentTask = state.taskMap[parentTaskGid];
      return Object.assign({}, state, {
        taskMap: Object.assign({}, state.taskMap, {
          [parentTaskGid]: Object.assign({}, parentTask, {
            subtaskform_id: null
          })
        })
      });
    }

    default:
      return state;
  }
}
