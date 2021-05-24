import React from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";

class CountryInfo extends React.Component {
  componentDidMount() {
    this.props.Summary();
    console.log(this.props);
  }

  getInformation = () => {
    const { countries } = this.props;
  };

  render() {
    return <div>{}</div>;
  }
}

function mapStateToProps(state) {
  return {
    countries: state.countries,
  };
}

export default connect(mapStateToProps, actions)(CountryInfo);
