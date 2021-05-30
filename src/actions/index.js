import covid from '../apis/keys';
import {
  FETCH_COUNTRIES,
  SELECTED_COUNTRY,
  API_CONFIG,
  SUMMARY,
} from './types';

export const apiConfig = () => async dispatch => {
  const response = await covid.get();

  dispatch({ type: API_CONFIG, payload: response.data });
};

export const fetchCountries = () => async dispatch => {
  const response = await covid.get(`/countries`);

  setTimeout(
    () => dispatch({ type: FETCH_COUNTRIES, payload: response.data }),
    600
  );
};

export const desiredCountry = name => async dispatch => {
  const reg = name.country.replace(/%20/g, '').replace(/ /g, '');
  const response = await covid.get(`/country/${reg}`);

  dispatch({ type: SELECTED_COUNTRY, payload: response.data });
};

export const Summary = () => async dispatch => {
  const response = await covid.get(`/summary`);

  setTimeout(() => dispatch({ type: SUMMARY, payload: response.data }), 600);
};
