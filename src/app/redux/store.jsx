import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { shortenAPI } from "./reducer/shortenReducer";

export default createStore(
  shortenAPI,
  composeWithDevTools(applyMiddleware(thunk))
);
