// actions.js
import { FETCH_DATA, FETCH_DATA_SUCCESS, FETCH_DATA_ERROR } from "./actionTypes";

export const fetchData = (params: {searchTerm: string, offset: number, limit: number }) => ({
  type: FETCH_DATA,
  payload: params
});

export const fetchDataSuccess = (data) => ({
    type: FETCH_DATA_SUCCESS,
    payload: data
  });

  export const fetchDataError = (error) => ({
    type: FETCH_DATA_ERROR,
    payload: error
  });
