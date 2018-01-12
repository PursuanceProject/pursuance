export default function(state = {}, action) {
  switch (action.type) {
    case 'GET_PUBLIC_PURSUANCES_PENDING':
      return state;

    case 'GET_PUBLIC_PURSUANCES_FULFILLED':
      return action.payload;

    case 'GET_PUBLIC_PURSUANCES_REJECTED':
      return state;

    case 'POST_PUBLIC_PURSUANCE_FULFILLED':
      return Object.assign({}, state, {
        [action.payload.id]: action.payload
      });

    default:
      return state;
  }
}
