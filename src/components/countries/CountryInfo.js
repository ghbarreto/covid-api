import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import date from 'date-and-time';
import NumberFormat from 'react-number-format';

import DisplayTerritories from './DisplayTerritories';
import Card from '../Card';

class CountryInfo extends React.Component {
  componentDidMount() {
    const { country } = this.props.country;

    this.props.Summary();
    this.props.countryTerritoriesInfo(country);
  }

  getInformation = () => {
    const { country } = this.props.country;
    console.log();
    if (this.props.summary) {
      return this.props.summary.Countries.map(e => {
        if (e.CountryCode === country) {
          return (
            <div key="code">
              <div className="ui">
                <div className="ui ">
                  <h4 className="ui right aligned header">
                    Updated: {date.format(new Date(e.Date), 'ddd, DD MMM YYYY')}
                  </h4>
                </div>
                <h2
                  className="ui header"
                  style={{ display: 'flex', justifyContent: 'center' }}
                >
                  <div
                    className="content"
                    style={{ display: 'inline-grid', gap: '10px' }}
                  >
                    <img
                      src={`https://www.countryflags.io/${e.CountryCode}/shiny/64.png`}
                    />
                    {e.Country}
                  </div>
                </h2>
              </div>
              <div
                className="ui link cards"
                style={{ justifyContent: 'center', marginTop: '30px' }}
              >
                <Card
                  title="Total Confirmed"
                  value={e.TotalConfirmed}
                  newValue={e.NewConfirmed}
                />
                <Card
                  title="Deaths"
                  value={e.TotalDeaths}
                  newValue={e.NewDeaths}
                />
                <Card title="Recovered" value={e.TotalRecovered} />
              </div>
            </div>
          );
        }
      });
    }
  };

  render() {
    return (
      <div>
        {this.getInformation()}
        <h2 style={{ display: 'flex', justifyContent: 'center' }}>
          Territories
        </h2>
        <DisplayTerritories
          country={this.props.country}
          territories={this.props.territories}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    countries: state.countries,
    summary: state.countries.global,
    territories: state.countries.territories,
  };
}

export default connect(mapStateToProps, actions)(CountryInfo);
