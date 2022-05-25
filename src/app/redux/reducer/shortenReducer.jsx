import { CLICK_ACTION, ERROR_MSG, SHORTEN_LINKS } from "../types/pageTypes";

const initialState = {
  click: false,
  shortenlink: [],
  error: false,
};

export const shortenAPI = (state = initialState, action) => {
  switch (action.type) {
    case CLICK_ACTION:
      return {
        ...state,
        click: action.payload,
      };
    case SHORTEN_LINKS:
      return {
        ...state,
        shortenlink: action.payload,
      };
    case ERROR_MSG:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
