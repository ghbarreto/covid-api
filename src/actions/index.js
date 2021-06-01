import covid from '../apis/keys';
import {
  FETCH_COUNTRIES,
  SELECTED_COUNTRY,
  SUMMARY,
  COUNTRY_TERRITORIES_INFO,
} from './types';

export const fetchCountries = () => async dispatch => {
  const response = await covid.get(`/countries`);

  dispatch({ type: FETCH_COUNTRIES, payload: response.data });
};

export const desiredCountry = name => async dispatch => {
  const response = await covid.get(`/country/${name.country}`);

  dispatch({ type: SELECTED_COUNTRY, payload: response.data });
};

export const Summary = () => async dispatch => {
  const response = await covid.get(`/summary`);

  dispatch({ type: SUMMARY, payload: response.data });
};

export const countryTerritoriesInfo = name => async dispatch => {
  const response = await covid.get(`/live/country/${name}`);

  dispatch({ type: COUNTRY_TERRITORIES_INFO, payload: response.data });
};
