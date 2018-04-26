/**
* @Author: harsha
* @Date:   2018-04-25T20:56:32+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2018-04-26T16:57:36+05:30
*/
import React from 'react'
import Autosuggest from 'react-autosuggest'
import FuzzySearch from 'fuzzy-search'

class SearchBarComponent extends React.Component {
  constructor() {
    super();
    
    this.state = {
      value: '',
      suggestions: []
    };
  }
  //change watcher
  onChange = (event, { newValue, method }) => {
    this.setState({
      value: newValue
    });
  };
  
  //get suggestions workhorse | core of the fuzzy search logic
  
  getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    //fuzzy search block 
    const renderValues = this.props.data.fruits;
    const searcher = new FuzzySearch(renderValues, ['name'], {
      caseSensitive: false
    });
    //results post the fuzzy search
    const result = searcher.search(inputValue);
    
    return inputLength === 0 ? [] : result.map(value =>{
      return value.name.toLowerCase()
    }
  );
};

getSuggestionValue = (suggestion) => suggestion;
renderSuggestion = (suggestion) => (
  <div>
    {suggestion}
  </div>
);

//triggers the getSuggestions method and passes in the value therby updating state
onSuggestionsFetchRequested = ({ value }) => {
  this.setState({
    suggestions: this.getSuggestions(value)
  });
};

//Clears the given suggestions and sets the state to an empty array

onSuggestionsClearRequested = () => {
  this.setState({
    suggestions: []
  });
};

render() {
  const { value, suggestions } = this.state;
  const inputProps = {
    placeholder: "Type name of a fruit",
    value,
    onChange: this.onChange
  };
  
  return (
    <Autosuggest
      suggestions={suggestions}
      onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
      onSuggestionsClearRequested={this.onSuggestionsClearRequested}
      getSuggestionValue={this.getSuggestionValue}
      renderSuggestion={this.renderSuggestion}
      inputProps={inputProps} />
  );
}
}

export default SearchBarComponent;
