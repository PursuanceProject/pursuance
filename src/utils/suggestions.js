export const filterUsers = (value, userObj) => {
  const usersArr = Object.values(userObj);
  const lowerCaseVal = value.toLowerCase();
  const filtered = usersArr.filter((user) => {
    const lowerCaseUser = user.username.toLowerCase();
    return lowerCaseUser.startsWith(lowerCaseVal);
  });
  return filtered.sort(sortBySuggest);
}

const sortBySuggest = (suggest1, suggest2) => {
  return suggest1.username.localeCompare(suggest2.username);
}

export const scrollIntoViewOptions = {behavior: 'instant', block: 'nearest'};
if (window.browser === 'Firefox') {
  delete(scrollIntoViewOptions.block);
}
