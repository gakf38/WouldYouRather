// Login Action Types
export const LOGIN_USER = 'LOGIN_USER'

// Login User Action Creator
export function loginUser(user) {
	return {
		type: LOGIN_USER,
		user
	}
}