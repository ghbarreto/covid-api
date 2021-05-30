import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import FetchCountries from './countries/FetchCountries';
import SelectedCountry from './countries/SelectedCountry';
import Header from './Header';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Route exact path="/" component={FetchCountries} />
        <Route exact path="/country/:country" component={SelectedCountry} />
      </BrowserRouter>
    );
  }
}

export default App;
