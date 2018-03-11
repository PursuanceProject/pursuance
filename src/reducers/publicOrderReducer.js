export default function(state = 'Most Recent', action) {
  switch (action.type) {
    case 'SET_PUBLIC_ORDER':
      return action.publicOrder;
    default:
      return state;
  }
}
