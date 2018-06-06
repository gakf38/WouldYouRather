// Users Action Types
export const RECEIVE_USERS = 'RECEIVE_USERS'

// Receive Users Action Creator
export function receiveUsers(users) {
	return {
		type: RECEIVE_USERS,
		users
	}
}