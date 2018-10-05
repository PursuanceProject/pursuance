export const filterSuggestion = (value, suggestionsObj) => {
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

const userAgent = navigator.userAgent;
let behaviorType = 'smooth';
if (userAgent.indexOf('Firefox') === -1 && userAgent.indexOf('Chromium') === -1 && userAgent.indexOf('Chrome') > -1) {
  behaviorType = 'instant';
}

export const scrollIntoViewOptions = { behavior: behaviorType, block: 'nearest' };
if (window.browser === 'Firefox') {
  delete scrollIntoViewOptions.block;
}