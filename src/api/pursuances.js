import * as postgrest from './postgrest';
import { PURSUANCE_DISPLAY_PREFIX } from '../constants';

export const getPursuancesReq = pursuanceIds => {
  return postgrest
    .getJSON(
      '/pursuances' +
        (pursuanceIds ? '?id=in.(' + pursuanceIds.join(',') + ')' : '')
    )
    .then(pursuances => {
      const pursuancesObject = {};
      for (let i = 0; i < pursuances.length; i++) {
        pursuancesObject[pursuances[i].id] = pursuances[i];
        pursuancesObject[pursuances[i].id].suggestionName =
          PURSUANCE_DISPLAY_PREFIX + pursuances[i].name;
      }
      return pursuancesObject;
    })
    .catch(err => {
      console.log('Error fetching pursuances:', err);
    });
};

export const getPublicPursuancesReq = () => {
  return postgrest
    .getJSON('/pursuances?is_encrypted=is.false')
    .then(pursuances => {
      const pursuancesObject = {};
      for (let i = 0; i < pursuances.length; i++) {
        pursuancesObject[pursuances[i].id] = pursuances[i];
        pursuancesObject[pursuances[i].id].suggestionName =
          PURSUANCE_DISPLAY_PREFIX + pursuances[i].name;
      }
      return pursuancesObject;
    })
    .catch(err => {
      console.log('Error fetching public pursuances:', err);
    });
};

export const postPursuanceReq = pursuance => {
  delete pursuance.isPending;
  delete pursuance.redirect;
  return postgrest
    .postJSON('/pursuances', pursuance, { Prefer: 'return=representation' })
    .then(pursuanceJSON => pursuanceJSON[0])
    .catch(err => console.log('Error posting pursuance:', err));
};
