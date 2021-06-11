import React from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import { withRouter } from "react-router-dom";
import { compose } from "redux";

import WorldInfo from "../status/WorldInfo";

class FetchCountries extends React.Component {
  componentDidMount() {
    this.props.fetchCountries();
    console.log(this.props);
  }

  displayCountries() {
    const { countries } = this.props;

    if (countries.fetch) {
      return Object.values(countries.fetch).map(e => {
        return (
          <option key={e.ISO2} value={e.ISO2}>
            {e.Country}
          </option>
        );
      });
    }

    return <div>Loading</div>;
  }

  chooseCountry = country => {
    this.props.history.push(`/country/${country}`);
  };

  render() {
    return (
      <React.Fragment>
        <select key="select" onChange={e => this.chooseCountry(e.target.value)}>
          <option className="center" defaultValue key="choose">
            Choose
          </option>
          {this.displayCountries()}
        </select>
        <div
          className="ui link cards"
          style={{ justifyContent: "center", marginTop: "30px" }}
        >
          <WorldInfo />
        </div>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    countries: state.countries,
  };
}

export default compose(
  withRouter,
  connect(mapStateToProps, actions)
)(FetchCountries);
