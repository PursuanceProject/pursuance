export const filterSuggestion = (value, suggestionsObj) => {
  console.log("suggestionsObj", suggestionsObj);
  const suggestionsArr = Object.values(suggestionsObj);
  const lowerCaseVal = value.toLowerCase();
  const filtered = suggestionsArr.filter(suggestion => {
    const suggest = suggestion.name || suggestion.suggestionName;
    const lowerCaseSuggestion = suggest.toLowerCase();
    return lowerCaseSuggestion.startsWith(lowerCaseVal);
  });
  return filtered.sort(sortBySuggest);
};

const sortBySuggest = (suggest1, suggest2) => {
  return suggest1.suggestionName.localeCompare(suggest2.suggestionName);
};

export const scrollIntoViewOptions = { behavior: "instant", block: "nearest" };
if (window.browser === "Firefox") {
  delete scrollIntoViewOptions.block;
}
