'use strict'

import { combineReducers } from 'redux'
import * as rootReducers from './root'
import { reducer as formReducer } from 'redux-form'

export default combineReducers(Object.assign({},
	{ form: formReducer },
	rootReducers,
))