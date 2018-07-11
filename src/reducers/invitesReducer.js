const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'GET_INVITES':
      return Object.assign({}, state, {
        '3e99889a-850e-11e8-80a7-00163e5e6c13': {
          id: '3e99889a-850e-11e8-80a7-00163e5e6c13',
          pursuance_id: 33,
          permissions_level: 'Admin',
          purpose: 'Co-workers',
          invite_url: 'https://app.pursuanceproject.org/invite/3e99889a-850e-11e8-80a7-00163e5e6c13#MammalKimonoJazzEquipmentJellyKryptonGamekeeperFossilGiddinessRearrangeArrowhead'
        }
      });

    default:
      return state;
  }
}
