import {createStore, applyMiddleware} from 'redux';

import  Middleware  from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import Reducers from './reducers'

const initialState = {}
const store = createStore(
    Reducers,
    initialState,
    composeWithDevTools(applyMiddleware(Middleware))

)

export default store;