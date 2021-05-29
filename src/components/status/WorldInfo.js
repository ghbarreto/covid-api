import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import date from 'date-and-time';

class WorldInfo extends React.Component {
  componentDidMount() {
    this.props.Summary();
  }

  returnInformation() {
    const { summary } = this.props;
    if (summary) {
      console.log(typeof summary.Countries);
      console.log(summary.Global);

      return (
        <div>
          <div>New Cases: {summary.Global.NewConfirmed}</div>
          <div>New Deaths: {summary.Global.NewDeaths}</div>
          <div>New Recovered: {summary.Global.NewRecovered}</div>
          <div>Total Confirmed: {summary.Global.TotalConfirmed}</div>
          <div>Total Deaths: {summary.Global.TotalDeaths}</div>
          <div>Total Recovered: {summary.Global.TotalRecovered}</div>
          <div>
            Last Updated:
            {date.format(new Date(summary.Global.Date), 'ddd, DD MMM YYYY')}
          </div>
        </div>
      );
    }
  }

  render() {
    return <div>{this.returnInformation()}</div>;
  }
}

function mapStateToProps(state) {
  return {
    countries: state.countries,
    summary: state.countries.global,
  };
}

export default connect(mapStateToProps, actions)(WorldInfo);
