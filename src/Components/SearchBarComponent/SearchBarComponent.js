/**
* @Author: harsha
* @Date:   2018-04-25T20:56:32+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2018-04-26T00:05:06+05:30
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
  
  onChange = (event, { newValue, method }) => {
    this.setState({
      value: newValue
    });
  };
  
  getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    const renderDummies =  this.props.data;
    console.log(renderDummies);
    const renderValues = this.props.data.fruits;
    const searcher = new FuzzySearch(renderValues, ['name'], {
      caseSensitive: false
    });
    
    const result = searcher.search(inputValue);
    console.log(result);
    
    return inputLength === 0 ? [] : result.map(value =>{
      console.log(value.name.toLowerCase());
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
onSuggestionsFetchRequested = ({ value }) => {
  this.setState({
    suggestions: this.getSuggestions(value)
  });
};

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
