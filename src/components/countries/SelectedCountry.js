import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import PieChart from "./PieChart";
import CountryInfo from "./CountryInfo";

class SelectedCountry extends React.Component {
  state = {
    active: [],
  };

  componentDidMount() {
    const country = this.props.match.params;
    country.country.replace(/%20/g, "").replace(/ /g, "");
    this.props.desiredCountry(country);
  }

  displayInformation = () => {
    const activeArr = [];
    const countryName = this.props.match.params.country;

    const { countries } = Object.values(this.props.countries.countries).map(e =>
      activeArr.push(e.Active)
    );

    return (
      <div>
        <h1>{countryName}</h1>
        <PieChart active={activeArr} info={this.props.countries} />
      </div>
    );
  };

  getMoreInfo = () => {
    return <CountryInfo country={this.props.match.params.country} />;
  };

  render() {
    return (
      <div>
        {this.displayInformation()} {this.getMoreInfo()}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    countries: state,
  };
}

export default connect(mapStateToProps, actions)(SelectedCountry);
