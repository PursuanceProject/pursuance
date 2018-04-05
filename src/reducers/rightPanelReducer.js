const initialState = {
  show: false,
  tab: 'TaskDetails',
  taskGid: ''
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'RIGHT_PANEL_SHOW_TASK_DETAILS':
      const { taskGid, show } = action;
      return Object.assign({}, state, {
        show: show,
        tab: 'TaskDetails',
        taskGid
      });

    case 'RIGHT_PANEL_TOGGLE':
      return Object.assign({}, state, {
        show: !state.show
      });


    default:
      return state;
  }
}
