import * as postgrest from './postgrest';

export const getUsersReq = () => {
  return postgrest.getJSON('/users?select=id,username')
    .then((usersArray) => {
      const usersObject = {};
      for (var i = 0; i < usersArray.length; i++) {
          usersObject[usersArray[i].username] = usersArray[i];
        }
        return usersObject;
      })
    .catch(err => console.log(err, 'error fetching users'))
}
