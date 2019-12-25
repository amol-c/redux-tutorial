import { combineEpics } from 'redux-observable';
import fetchDataEpic from './fetchDataEpic'

const rootEpic = combineEpics(fetchDataEpic);

export default rootEpic
