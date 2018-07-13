const initialState = {
  modal: '',
  error: '',
}

export default function(state = initialState, action) {
  switch (action.type) {
    case 'TOGGLE_ROLE_INFO_MODAL':
      const modal = state.modal === '' ? 'RoleInfo' : '';
      return {
        ...state,
        modal
      };

    default:
      return state;
  }
}
