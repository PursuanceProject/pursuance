const initialState = {
    name : '',
    mission : '',
    is_encrypted: false,
    isPending: false,
    redirect: false
}

export default function (state = initialState, action) {

  switch (action.type) {

    case 'UPDATE_CREATE_PURSUANCE_FORM':
    const { fieldId, value } = action;
      return Object.assign({}, state, {
        [fieldId] : value
      });

    case 'POST_PURSUANCE_PENDING':
        return Object.assign({}, state, {
          isPending: true
      });

    case 'POST_PURSUANCE_FULFILLED':
        return Object.assign({}, state, {
          isPending: false,
          redirect: true
      });

    case 'POST_PURSUANCE_REJECTED':
        return Object.assign({}, state, {
          isPending: false
      });

    case 'PURSUANCE_FORM_CLEAR_FIELDS':
        return Object.assign({}, state, initialState);

    default:
      return state;
  }
}
