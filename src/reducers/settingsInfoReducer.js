export default function(state = false, action) {
  switch (action.type) {
    case 'TOGGLE_SETTINGS_INFO_MODAL':
      return !state;

    default:
      return state;
  }
}
