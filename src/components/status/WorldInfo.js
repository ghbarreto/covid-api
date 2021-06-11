import React from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import Card from "../Card";

class WorldInfo extends React.Component {
  componentDidMount() {
    this.props.Summary();
  }

  returnInformation() {
    const { summary } = this.props;
    if (summary) {
      return (
        <React.Fragment>
          <Card
            title="Cases"
            value={summary.Global.TotalConfirmed}
            newValue={summary.Global.NewConfirmed}
          />

          <Card
            title="Deaths"
            value={summary.Global.TotalDeaths}
            newValue={summary.Global.NewDeaths}
          />

          <Card
            title="Recovered"
            value={summary.Global.TotalRecovered}
            recovered={summary.Global.NewRecovered}
          />
        </React.Fragment>
      );
    }
  }

  render() {
    return this.returnInformation() || <div></div>;
  }
}

function mapStateToProps(state) {
  return {
    countries: state.countries,
    summary: state.countries.global,
  };
}

export default connect(mapStateToProps, actions)(WorldInfo);
