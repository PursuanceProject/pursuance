export default function (state = false, action) {
  switch (action.type) {
    case 'POST_PURSUANCE_FULFILLED':
      return true;

      case 'REMOVE_SUCCESS_TOAST':
        return false;

    default:
      return state
  }
}
