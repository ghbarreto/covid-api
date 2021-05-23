import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

import FetchCountries from "./countries/FetchCountries";
import SelectedCountry from "./countries/SelectedCountry";

class App extends React.Component {
  render() {
    return (
      <div>
        Hello World
        <FetchCountries selectedCountry={this.selectedCountry} />
      </div>
    );
  }
}

export default connect(null, actions)(App);
