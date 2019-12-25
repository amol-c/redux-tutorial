// ./src/redux/reducers/index.js

import { combineReducers } from "redux";
import fetchDataReducer from "./fetchDataReducer";

const rootReducer = combineReducers({ fetchDataReducer });

export default rootReducer
