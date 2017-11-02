import * as postgrest from './postgrest';

export const getUsersReq = () => {
  return postgrest.getJSON('/users?select=username')
    .then((usersArray) => {
      const usersObject = {};
      for (var i = 0; i < usersArray.length; i++) {
        usersObject[usersArray[i].username] = usersArray[i];
        usersObject[usersArray[i].username].suggestionName = usersArray[i].username;
      }
      return usersObject;
    })
    .catch(err => console.log('Error fetching users:', err))
}
