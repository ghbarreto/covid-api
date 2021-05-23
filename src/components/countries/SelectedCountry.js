import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";

const SelectedCountry = props => {
  useEffect(() => {
    console.log(props.name);
    props.desiredCountry(props.name);
  }, [props.name]);

  return <div>{console.log(props.name)}</div>;
};

function mapStateToProps(state) {
  return {
    countries: state.countries,
  };
}

export default connect(mapStateToProps, actions)(SelectedCountry);
