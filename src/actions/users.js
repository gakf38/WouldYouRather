// saveQuestionAnswer API function
import { saveQuestionAnswer } from '../utils/api'

// Users Action Types
export const RECEIVE_USERS = 'RECEIVE_USERS'
export const SAVE_QUESTION = 'SAVE_QUESTION'

// Receive Users Action Creator
export function receiveUsers(users) {
	return {
		type: RECEIVE_USERS,
		users
	}
}

// Save Question Answer Action Creator
export function saveAnswer(loginUser, qid, answer) {
	return {
		type: SAVE_QUESTION,
		loginUser,
		qid,
		answer
	}
}

// Save Question Answer Async Action Creator Function (uses the Thunk middleware)
export function handleSaveAnswerUser(qid, answer) {
	return (dispatch, getState) => {

		const { loginUser } = getState()

		return saveQuestionAnswer({ authedUser: loginUser, qid, answer })
				.then(() => dispatch(saveAnswer(loginUser, qid, answer)))
	}
}