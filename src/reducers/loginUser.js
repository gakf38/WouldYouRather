// Login Action Types
import { LOGIN_USER } from '../actions/loginUser'

// Login Reducer Function
export default function loginUser (state=null, action) {

	switch (action.type) {

		case LOGIN_USER :
			return action.user

		default :
			return state
	}
} 