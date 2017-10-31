export default function (state = {}, action) {

  switch (action.type) {

    case 'GET_PURSUANCES_PENDING':
      return state;

    case 'GET_PURSUANCES_FULFILLED':
      return action.payload

    case 'GET_PURSUANCES_REJECTED':
      return state;

    default:
      return state
  }

}
