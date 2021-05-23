import React from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import SelectedCountry from "./SelectedCountry";

class FetchCountries extends React.Component {
  state = {
    country: "",
  };

  componentDidMount() {
    this.props.fetchCountries();
  }

  displayCountries() {
    const { countries } = this.props;

    return countries.map(e => {
      return (
        <option
          className="text"
          key={e.ISO2}
          value={e.Country}
          data-tokens={`${e.Country}`}
        >
          {e.Country}
        </option>
      );
    });
  }

  render() {
    return (
      <div>
        <select onChange={e => this.setState({ country: e.target.value })}>
          {this.displayCountries()}
        </select>
        <SelectedCountry name={this.state} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    countries: state.countries,
  };
}

export default connect(mapStateToProps, actions)(FetchCountries);
