'use strict'

import createReducer from '../createReducer'
import * as types from '../../libs/constants/actiontypes';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
	root: undefined // 'login' / 'after-login'

});

export const getRootData = createReducer(initialState, {
	[types.ROOT_CHANGED](state, action) {
		console.log(state, action)
		return action
	},
})
