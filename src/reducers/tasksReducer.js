const initialState = {
  addedTasks : []
}

export default function (state = initialState, action) {

  switch (action.type) {

    case 'POST_TASK_PENDING':
      return state;

    case 'POST_TASK_FULFILLED':
      return Object.assign({}, state, {
        addedTasks: [...state.addedTasks, action.payload]
      });

    case 'POST_TASK_REJECTED':
      return 'CHECK CONSOLE FOR ERROR';

    default:
      return state
  }

}
