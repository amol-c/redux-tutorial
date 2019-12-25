import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers'
import rootEpic from './epics'
import { createEpicMiddleware } from 'redux-observable';

const epicMiddleware = createEpicMiddleware();

const middlewares = [epicMiddleware];

const enhancer = composeWithDevTools(applyMiddleware(...middlewares));

const store = createStore(rootReducer, enhancer);

epicMiddleware.run(rootEpic);

export default store
