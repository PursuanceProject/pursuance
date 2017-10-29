import * as postgrest from './postgrest';

export const getUsersReq = () => {
  return postgrest.getJSON('/users?select=username')
    .then((usersArray) => {
      const usersObject = {};
      for (var i = 0; i < usersArray.length; i++) {
          usersObject[usersArray[i].username] = usersArray[i];
        }
        return usersObject;
      })
    .catch(err => console.log('error fetching users:', err))
}
