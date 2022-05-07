import { CLICK_ACTION } from "../types/pageTypes";

export const clickAction = (mode) => {
  return (dispatch) => {
    dispatch({
      type: CLICK_ACTION,
      payload: mode,
    });
  };
};
