import * as postgrest from './postgrest';
import { PURSUANCE_DISPLAY_PREFIX } from '../constants';

export const getPursuancesReq = () => {
  return postgrest.getJSON('/pursuances')
    .then((pursuances) => {
      const pursuancesObject = {};
      for (var i = 0; i < pursuances.length; i++) {
        pursuancesObject[pursuances[i].id] = pursuances[i];
        pursuancesObject[pursuances[i].id].suggestionName = PURSUANCE_DISPLAY_PREFIX + pursuances[i].name;
      }
      return pursuancesObject;
    })
    .catch((err) => {
      console.log('Error fetching pursuances:', err);
    })
}
