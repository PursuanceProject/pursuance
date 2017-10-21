export default function (state = {}, action) {

  switch (action.type) {
    case 'TASK_FIELD_UPDATE':
      const { formId, fieldId, value } = action;
      return Object.assign({}, state, {
        [formId]: Object.assign({}, state[formId], {
          [fieldId]: value
        })
      })

    default:
      return state;
  }
}
