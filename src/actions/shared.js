// API Functions
import { getInitialData } from '../utils/api'

// Action Creators
import { receiveUsers, handleSaveAnswerUser } from './users'
import { receiveQuestions, handleSaveAnswerQuestion } from './questions'

// Async Action Creator for getting and sending the initial app data to the Redux Store
export function handleInitialData() {
	return (dispatch) => {
		return getInitialData()
			.then(({ users, questions }) => {

				// Dispatch the Initial Data Actions
				dispatch(receiveUsers(users))
				dispatch(receiveQuestions(questions))
			})
	}
}

// Async Action Creator for dispatching the actions related to a user voting on a question
export function handleSaveAnswer(qid, answer) {
	return (dispatch) => {
		dispatch(handleSaveAnswerQuestion(qid, answer))
		dispatch(handleSaveAnswerUser(qid, answer))
	}
}