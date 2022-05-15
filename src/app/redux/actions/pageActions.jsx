import { CLICK_ACTION, SHORTEN_LINKS } from "../types/pageTypes";
import axios from "axios";

let arrayList = [];

export const clickAction = (mode) => {
  return (dispatch) => {
    dispatch({
      type: CLICK_ACTION,
      payload: mode,
    });
  };
};

export const shortAction = (
  link = "https://www.facebook.com/",
  setList,
  list
) => {
  return async (dispatch) => {
    let short = [];
    const url = `https://api.shrtco.de/v2/shorten?url=${link}`;
    await axios
      .get(url)
      .then((response) => {
        if (response.status === 201) {
          const responselink = response.data.result;
          short.push({
            id: responselink.code,
            short_link: responselink.short_link,
            original: responselink.original_link,
          });
          arrayList.push(short[0]);
          dispatch(shortLink(arrayList));
        }
      })
      .catch(() => {
        console.log("Error");
      });
  };
};
export const shortLink = (list) => {
  return {
    type: SHORTEN_LINKS,
    payload: list,
  };
};
