export default function(state = {}, action) {
  switch (action.type) {
    case 'GET_PURSUANCES_BY_IDS_PENDING':
      return state;

    case 'GET_PURSUANCES_BY_IDS_FULFILLED':
      return Object.assign({}, state, action.payload);

    case 'GET_PURSUANCES_BY_IDS_REJECTED':
      return state;

    case 'GET_PURSUANCES_PENDING':
      return state;

    case 'GET_PURSUANCES_FULFILLED':
      return action.payload;

    case 'GET_PURSUANCES_REJECTED':
      return state;

    case 'POST_PURSUANCE_FULFILLED':
      return Object.assign({}, state, {
        [action.payload.id]: action.payload
      });

    default:
      return state;
  }
}
