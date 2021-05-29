import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import date from 'date-and-time';

class CountryInfo extends React.Component {
  componentDidMount() {
    this.props.Summary();
  }

  getInformation = () => {
    const { country } = this.props.country;

    if (this.props.summary) {
      return this.props.summary.Countries.map(e => {
        if (e.CountryCode === country) {
          return (
            <div key="code">
              <ul>
                <li>Country: {e.Country}</li>
                <li>Country Code: {e.CountryCode}</li>
                <li>
                  Date: {date.format(new Date(e.Date), 'ddd, DD MMM YYYY')}
                </li>
                <li>New Confirmed: {e.NewConfirmed}</li>
                <li>New Deaths: {e.NewDeaths}</li>
                <li>Total Confirmed: {e.TotalConfirmed}</li>
                <li>Total Deaths: {e.TotalDeaths}</li>
                <li>Total Recovered: {e.TotalRecovered}</li>
              </ul>
            </div>
          );
        }
      });
    }
  };

  render() {
    return <div>{this.getInformation()}</div>;
  }
}

function mapStateToProps(state) {
  return {
    countries: state.countries,
    summary: state.countries.global,
  };
}

export default connect(mapStateToProps, actions)(CountryInfo);
