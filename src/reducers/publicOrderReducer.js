export default function(state = 'Most Recent', action) {
  switch (action.type) {
    case 'SET_PUBLIC_ORDER':
      state = action.publicOrder;
      return state;
    default:
      return state;
  }
}
