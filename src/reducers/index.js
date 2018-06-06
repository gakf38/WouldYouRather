// Redux Combine Reducers Function
import { combineReducers } from 'redux'

// Reducer Functions
import users from './users'
import questions from './questions'

// Root Reducer Function
export default combineReducers({
	users,
	questions
})