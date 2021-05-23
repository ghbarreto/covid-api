import { combineReducers } from "redux";
import fetchCountries from "./fetchCountries";

export default combineReducers({
  countries: fetchCountries,
});
