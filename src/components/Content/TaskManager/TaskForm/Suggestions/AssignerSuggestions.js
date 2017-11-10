import React from 'react';
import {connect} from 'react-redux';
import {addSuggestion} from '../../../../../actions';
import {scrollIntoViewOptions} from '../../../../../utils/suggestions';
import './AssignerSuggestions.css';

const AssignerSuggestions = ({taskForm, addSuggestion, focusDatePicker}) => (
  <div className="suggestions-container">
    <ul className="suggestion-list">
      {taskForm.suggestions.map((suggestion, i) => {
        const activeItem = taskForm.highlightedSuggestion === i;
        const suggestionName = suggestion.suggestionName;
        let props = {
          key: i,
          onMouseDown: () => {
            addSuggestion(suggestionName);
            focusDatePicker();
          },
          className: activeItem ? 'active suggestion' : 'suggestion'
        };
        if (activeItem) {
          props.ref = item => {
            if (item) item.scrollIntoView(scrollIntoViewOptions);
          };
        }
        return <li {...props}>{suggestionName}</li>;
      })}
    </ul>
  </div>
);

export default connect(({taskForm}) => ({taskForm}), {addSuggestion})(
  AssignerSuggestions
);
