'use strict'

import reducer from '../reducers'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'

const configStore = (initialState) => {
	const enhancer = compose(
		applyMiddleware(
			thunkMiddleware
		),
	)

	return createStore(reducer, initialState, enhancer)
}

export default configStore({})