export default function(state = {}, action) {
  switch (action.type) {
    case 'POST_MEMBERSHIP_PENDING':
      return state;

    case 'POST_MEMBERSHIP_FULFILLED':
      return Object.assign({}, state, {
        [action.payload.pursuance_id]: action.payload
      });

    case 'POST_MEMBERSHIP_REJECTED':
      return state;

    case 'GET_MEMBERSHIPS_PENDING':
      return state;

    case 'GET_MEMBERSHIPS_FULFILLED':
      return Object.assign({}, state, ...action.payload);

    case 'GET_MEMBERSHIPS_REJECTED':
      return state;

    case 'DELETE_MEMBERSHIP_PENDING':
      return state;

    case 'DELETE_MEMBERSHIP_FULFILLED':
      const {
        [String(action.payload.pursuance_id)]: _,
        ...updatedState
      } = state;
      return updatedState;

    case 'DELETE_MEMBERSHIP_REJECTED':
      return state;

    default:
      return state;
  }
}
