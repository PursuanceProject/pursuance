const initialState = {
  show: false,
  tab: 'TaskDetails',
  taskGid: ''
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'RIGHT_PANEL_SHOW_TASK_DETAILS': {
      const { taskGid, show } = action;
      return Object.assign({}, state, {
        show: show,
        tab: 'TaskDetails',
        taskGid
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
      if (state.tab === 'TaskDetails' && state.show && state.taskGid === taskGid) {
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
