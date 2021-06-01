import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import PieChart from './PieChart';
import CountryInfo from './CountryInfo';

class SelectedCountry extends React.Component {
  componentDidMount() {
    const country = this.props.match.params;
    country.country.replace(/%20/g, '').replace(/ /g, '');
    this.props.desiredCountry(country);
  }

  displayInformation = () => {
    const activeArr = [];
    const recovered = [];
    const deaths = [];
    const confirmed = [];

    const iterateObjects = this.props.countries.countries;

    if (iterateObjects.selected) {
      const countries = Object.values(iterateObjects.selected).map(e => {
        activeArr.push(e.Active);
        recovered.push(e.Recovered);
        deaths.push(e.Deaths);
        confirmed.push(e.Confirmed);
      });
      return (
        <div>
          <PieChart
            active={activeArr}
            deaths={deaths}
            recovered={recovered}
            confirmed={confirmed}
            info={this.props.countries}
          />
        </div>
      );
    }

    return <div>Loading</div>;
  };

  getMoreInfo = () => {
    return <CountryInfo country={this.props.match.params} />;
  };

  render() {
    return (
      <div>
        <div>{this.getMoreInfo()}</div>
        <div>{this.displayInformation()}</div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    countries: state,
    selected: state.countries.selected,
  };
}

export default connect(mapStateToProps, actions)(SelectedCountry);
