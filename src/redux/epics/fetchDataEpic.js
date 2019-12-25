// fetchDataEpic.js
import { Epic } from 'redux-observable';
import { from, of } from 'rxjs';
import {  switchMap, catchError, filter } from 'rxjs/operators';
import {FETCH_DATA} from '../actionTypes'
import {fetchDataSuccess, fetchDataError} from '../actions'

const fetchDataEpic: Epic = (action$) =>
{
  return action$.pipe(
    filter(action => {
        return action.type === FETCH_DATA
    }),
    switchMap((action) =>
      from(fetchGiphy(action.payload)).pipe(
        switchMap((response) => {
          return of(
            fetchDataSuccess(response),
          );
        }),
        catchError((error) => of(fetchDataError(error)))
      )
    )
  );
}

const fetchGiphy = (params: {searchTerm: string, offset: number, limit: number}) => {
    return fetch(`http://api.giphy.com/v1/gifs/search?offset=${params.offset}&limit=${params.limit}&q=${params.searchTerm}&api_key=dc6zaTOxFJmzC`).then(function(response) {
        return response.json();
      })
}

  export default fetchDataEpic
