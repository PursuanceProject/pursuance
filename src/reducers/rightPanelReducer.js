const _now = new Date();
const _2monthsAgo = new Date(_now.getFullYear(), _now.getMonth() - 2, 1);

const initialState = {
  show: true,
  tab: 'TaskList',
  taskGid: '',
  taskListFilter:
    '@me status:!done due:>' + _2monthsAgo.toISOString().slice(0, 10)
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'RIGHT_PANEL_SHOW_TASK_DETAILS': {
      const { taskGid, show } = action;
      return Object.assign({}, state, {
        show: show,
        tab: 'TaskDetails',
        taskGid: taskGid || state.taskGid
      });
    }

    case 'RIGHT_PANEL_TOGGLE_SHOW_TASK_LIST': {
      const { show } = action;
      return Object.assign({}, state, {
        show: show,
        tab: 'TaskList'
      });
    }

    case 'RIGHT_PANEL_TASK_LIST_FILTER_UPDATE': {
      const { taskListFilter } = action;
      return Object.assign({}, state, {
        taskListFilter
      });
    }

    case 'RIGHT_PANEL_TOGGLE': {
      return Object.assign({}, state, {
        show: !state.show
      });
    }

    case 'RIGHT_PANEL_SHOW_TASK_DETAILS_OR_COLLAPSE': {
      const { taskGid } = action;
      // Collapse
      if (
        state.tab === 'TaskDetails' &&
        state.show &&
        state.taskGid === taskGid
      ) {
        return Object.assign({}, state, {
          show: false
        });
      }
      // ...or show task details in right panel
      return Object.assign({}, state, {
        show: true,
        tab: 'TaskDetails',
        taskGid
      });
    }

    default:
      return state;
  }
}
