import { CLICK_ACTION, SHORTEN_LINKS } from "../types/pageTypes";

const initialState = {
  click: false,
  shortenlink: [],
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

    default:
      return state;
  }
};
