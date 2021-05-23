import covid from "../apis/keys";
import { FETCH_COUNTRIES, SELECTED_COUNTRY, API_CONFIG } from "./types";

export const apiConfig = () => async dispatch => {
  const response = await covid.get();

  dispatch({ type: API_CONFIG, payload: response.data });
};

export const fetchCountries = () => async dispatch => {
  const response = await covid.get(`/countries`);

  dispatch({ type: FETCH_COUNTRIES, payload: response.data });
};

export const desiredCountry = name => async dispatch => {
  const response = await covid.get(`/country}`);

  dispatch({ type: SELECTED_COUNTRY, payload: response.data });
};
