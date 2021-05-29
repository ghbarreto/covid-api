import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

import WorldInfo from '../status/WorldInfo';

class FetchCountries extends React.Component {
  componentDidMount() {
    this.props.fetchCountries();
  }

  displayCountries() {
    const { countries } = this.props;
    return Object.values(countries).map(e => {
      return (
        <option key={e.ISO2} value={e.ISO2}>
          {e.Country}
        </option>
      );
    });
  }

  chooseCountry = country => {
    this.props.history.push(`/country/${country}`);
  };

  render() {
    return (
      <div>
        <select key="select" onChange={e => this.chooseCountry(e.target.value)}>
          <option defaultValue key="choose">
            Choose
          </option>
          {this.displayCountries()}
        </select>
        <WorldInfo />
      </div>
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
