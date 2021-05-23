import {
  FETCH_COUNTRIES,
  SELECTED_COUNTRY,
  API_CONFIG,
} from "../actions/types";

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_COUNTRIES:
      return action.payload;
    case SELECTED_COUNTRY:
      return action.payload;
    case API_CONFIG:
      return action.payload;
    default:
      return state;
  }
}
