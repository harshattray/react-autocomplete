/**
 * @Author: harsha
 * @Date:   2018-04-25T20:06:46+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2018-04-26T16:23:06+05:30
 */

import React, { Component } from 'react';
import SearchBarComponent from './Components/SearchBarComponent/SearchBarComponent'
import './App.css';
import fruits from './fruits.json';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React based Autocomplete</h1>
        </header>
        <div className="App-intro">
          <SearchBarComponent data={fruits} />
          <p className="App-sub">Search for fruits</p>
          <p className="App-sub">Eg: Apple, cantaloupe, grapefruit ..etc </p>
        </div>
      </div>
    );
  }
}

export default App;
