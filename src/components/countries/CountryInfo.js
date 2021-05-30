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
                <div className="card">
                  <div className="content">
                    <div className="header">Total Confirmed</div>
                    <div className="description">
                      <NumberFormat
                        thousandSeparator={true}
                        value={e.TotalConfirmed}
                        displayType={'text'}
                      />
                      <span style={{ margin: '20px', color: 'salmon' }}>
                        <i className="arrow up icon"></i>
                        <NumberFormat
                          thousandSeparator={true}
                          value={e.NewConfirmed}
                          displayType={'text'}
                        />
                      </span>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="content">
                    <div className="header">Deaths</div>
                    <div className="description">
                      <NumberFormat
                        thousandSeparator={true}
                        value={e.TotalDeaths}
                        displayType={'text'}
                      />
                      <span style={{ margin: '20px', color: 'salmon' }}>
                        <i className="arrow up icon"></i>
                        <NumberFormat
                          thousandSeparator={true}
                          value={e.NewDeaths}
                          displayType={'text'}
                        />
                      </span>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="content">
                    <div className="header">Recovered</div>
                    <div className="description">
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
