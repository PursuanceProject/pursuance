const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'GET_INVITES':
      return Object.assign({}, state, {
        '3e99889a-850e-11e8-80a7-00163e5e6c13': {
          id: '3e99889a-850e-11e8-80a7-00163e5e6c13',
          pursuance_id: 33,
          permissions_level: 'Admin',
          purpose: 'Emailing to co-workers',
          invite_url: 'https://app.pursuanceproject.org/invite/3e99889a-850e-11e8-80a7-00163e5e6c13#MammalKimonoJazzEquipmentJellyKryptonGamekeeperFossilGiddinessRearrangeArrowhead'
        },
        '4e99889a-850e-11e8-80a7-00163e5e6c13': {
          id: '4e99889a-850e-11e8-80a7-00163e5e6c13',
          pursuance_id: 33,
          permissions_level: 'NormalUser',
          purpose: 'Sending to in-house volunteers via Slack',
          invite_url: 'https://app.pursuanceproject.org/invite/4e99889a-850e-11e8-80a7-00163e5e6c13#MammalKimonoJazzEquipmentJellyKryptonGamekeeperFossilGiddinessRearrangeArrowhead'
        },
        '5e99889a-850e-11e8-80a7-00163e5e6c13': {
          id: '5e99889a-850e-11e8-80a7-00163e5e6c13',
          pursuance_id: 33,
          permissions_level: 'Viewer',
          purpose: 'Posting to mailing list and website',
          invite_url: 'https://app.pursuanceproject.org/invite/5e99889a-850e-11e8-80a7-00163e5e6c13#MammalKimonoJazzEquipmentJellyKryptonGamekeeperFossilGiddinessRearrangeArrowhead'
        },
      });

    default:
      return state;
  }
}
