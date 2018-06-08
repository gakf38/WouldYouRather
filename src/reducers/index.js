// Redux Combine Reducers Function
import { combineReducers } from 'redux'

// Reducer Functions
import users from './users'
import questions from './questions'
import loginUser from './loginUser'

// Root Reducer Function
export default combineReducers({
	users,
	questions,
	loginUser
})