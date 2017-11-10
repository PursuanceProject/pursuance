export default function(state = {}, action) {
  switch (action.type) {
    case "SET_CURRENT_PURSUANCE":
      return action.currentPursuanceId;

    default:
      return state;
  }
}
