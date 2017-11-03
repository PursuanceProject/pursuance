const initialState = {
  notifications: [
    {
      id: 1,
      notificationType: 'MICRO_TASK',
      content: '12:34pm [@baileylamon.ppi](/users/123): Hey, guys. May I ask for a signal boost on this if you are on Twittaz? <https://twitter.com/PursuanceProj/status/908542358144270336>',
    },
    {
      id: 2,
      notificationType: 'MENTION',
      content: '12:53pm [@elimisteve](/users/123) in task [#43](/tasks/123)s chat room: [@barrettbrown](/users/123) Want to work on this?',
      actionTarget: '/pursuance/1/discuss'
    }
  ]
};

export default function (state = initialState, action) {
    switch (action.type) {

      case 'SET_NOTIFICATION':
        const { id, type, content, userAction, timestamp } = action;
        return {
          notifications: [{ id, type, content, userAction, timestamp },
                          ...state.notifications.filter(n => n.id !== id) ]
        };
      
      case 'REMOVE_NOTIFICATION':
        return {
          notifications: state.notifications.filter(n => n.id !== action.id)
        };

      default:
        return state
    }

  }
