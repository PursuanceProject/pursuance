export default function(state = null, action) {
  switch (action.type) {
    case 'SET_CURRENT_PURSUANCE':
      return action.currentPursuanceId;

    case 'POST_PURSUANCE_FULFILLED':
      return action.payload.id;

    default:
      return state;
  }
}
