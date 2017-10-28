import * as postgrest from './postgrest';

export const getPursuancesReq = () => {
  return postgrest.getJSON('/pursuances?select=id,name,description')
    .then((pursuances) => {
      const pursuancesObject = {};
      for (var i = 0; i < pursuances.length; i++) {
        pursuancesObject[pursuances[i].id] = pursuances[i];
      }
      return pursuancesObject;
    })
    .catch((err) => {
      console.log('Error fetching pursuances:', err);
    })
}
