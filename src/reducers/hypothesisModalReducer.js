export default function(state = {}, action) {
  switch (action.type) {
    case 'TOGGLE_MODAL_HYPOTHESIS_CREATE':
      return {
        ...state,
        taskGid: state.taskGid ? '' : action.taskGid
      };

    default:
      return state;
  }
}
