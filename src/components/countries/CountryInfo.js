import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import date from 'date-and-time';
import NumberFormat from 'react-number-format';

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
            <div key="code" className="ui message">
              <div className="ui ">
                <h2 className="ui right aligned header">
                  {date.format(new Date(e.Date), 'ddd, DD MMM YYYY')}
                </h2>
              </div>
              <h2 class="ui header">
                <div class="content">
                  <img
                    src={`https://www.countryflags.io/${e.CountryCode}/shiny/64.png`}
                  />
                  {e.Country}
                </div>
              </h2>

              <div class="ui cards" style={{ width: '250px' }}>
                <div class="card">
                  <div class="content">
                    <div class="header">Total Confirmed</div>
                    <div class="description">
                      <NumberFormat
                        thousandSeparator={true}
                        value={e.TotalConfirmed}
                        displayType={'text'}
                      />
                      <span style={{ margin: '20px', color: 'salmon' }}>
                        <i class="arrow up icon"></i>
                        <NumberFormat
                          thousandSeparator={true}
                          value={e.NewConfirmed}
                          displayType={'text'}
                        />
                      </span>
                    </div>
                  </div>
                </div>

                <div class="card">
                  <div class="content">
                    <div class="header">Deaths</div>
                    <div class="description">
                      <NumberFormat
                        thousandSeparator={true}
                        value={e.TotalDeaths}
                        displayType={'text'}
                      />
                      <span style={{ margin: '20px', color: 'salmon' }}>
                        <i class="arrow up icon"></i>
                        <NumberFormat
                          thousandSeparator={true}
                          value={e.NewDeaths}
                          displayType={'text'}
                        />
                      </span>
                    </div>
                  </div>
                </div>

                <div class="card">
                  <div class="content">
                    <div class="header">Recovered</div>
                    <div class="description">
                      <NumberFormat
                        thousandSeparator={true}
                        value={e.TotalRecovered}
                        displayType={'text'}
                      />
                    </div>
                  </div>
                </div>
              </div>
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
