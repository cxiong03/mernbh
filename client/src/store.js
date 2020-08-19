import {createStore, compose, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from "redux-thunk"
import reducers from "./reducers"

const INITIAL_STATE = {}

const middleware = [thunk]

const composer = 

export default