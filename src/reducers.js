import {combineReducers} from 'redux'

import {SET_SEARCH_FIELD,
		REQUEST_ROBOTS_PENDING,
		REQUEST_ROBOTS_SUCCESS,
		REQUEST_ROBOTS_FAILED} from './constants'

const iStateSearchbox = {
	searchField: ''
}
const searchRobots = (state=iStateSearchbox, action={}) => {
	switch (action.type) {
		case SET_SEARCH_FIELD:
			return Object.assign({}, state, {searchField: action.payload})
					//Another way: {...state, searchField: action.payload}
		default:
			return state
	}
}

const iStateRobots = {
	isPending: false,
	robots: [],
	error: ''
}
const requestRobots = (state=iStateRobots, action={}) => {
	switch(action.type) {
		case REQUEST_ROBOTS_PENDING:
			return {...state, isPending: true}
		case REQUEST_ROBOTS_SUCCESS:
			return {...state, isPending: false, robots: action.payload}
		case REQUEST_ROBOTS_FAILED:
			return {...state, isPending: false, error: action.payload}
		default:
			return state
	}
}

export default combineReducers({searchRobots, requestRobots})