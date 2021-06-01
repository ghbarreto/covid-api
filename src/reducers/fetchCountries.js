import {
  FETCH_COUNTRIES,
  SELECTED_COUNTRY,
  SUMMARY,
  COUNTRY_TERRITORIES_INFO,
} from '../actions/types';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_COUNTRIES:
      return action.payload;
    case SELECTED_COUNTRY:
      return { ...state, selected: action.payload };
    case SUMMARY:
      return { ...state, global: action.payload };
    case COUNTRY_TERRITORIES_INFO:
      return { ...state, territories: action.payload };
    default:
      return state;
  }
}
