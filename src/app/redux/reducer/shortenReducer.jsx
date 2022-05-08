import { CLICK_ACTION } from "../types/pageTypes";

const initialState = {
  click: false,
};

export const shortenAPI = (state = initialState, action) => {
  switch (action.type) {
    case CLICK_ACTION:
      return {
        ...state,
        click: action.payload,
      };
    default:
      return state;
  }
};
