// Question API functions
import { addNewQuestion, saveQuestionAnswer } from '../utils/api'

// React Redux Loading Action Creators
import { showLoading, hideLoading } from 'react-redux-loading'

// Questions Action Types
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const SAVE_QUESTION = 'SAVE_QUESTION'

// Receive Questions Action Creator Function
export function receiveQuestions(questions) {
	return {
		type: RECEIVE_QUESTIONS,
		questions
	}
}

// Add Question Action Creator Function
function addQuestion(question) {
	return {
		type: ADD_QUESTION,
		question
	}
}

// Add New Question Async Action Creator Function (uses the Thunk middleware)
export function handleAddNewQuestion(optionOneText, optionTwoText) {
	return (dispatch, getState) => {
		
		const { loginUser } = getState()

		dispatch(showLoading())

		return addNewQuestion({ optionOneText, optionTwoText, author: loginUser })
				.then((question) => dispatch(addQuestion(question)))
				.then(() => dispatch(hideLoading()))
	}
}

// Save Question Answer Action Creator Function
function saveAnswer(loginUser, qid, answer) {
	return {
		type: SAVE_QUESTION,
		loginUser,
		qid,
		answer
	}
}

// Save Question Answer Async Action Creator Function (uses the Thunk middleware)
export function handleSaveAnswerQuestion(qid, answer) {
	return (dispatch, getState) => {

		const { loginUser } = getState()

		return saveQuestionAnswer({ authedUser: loginUser, qid, answer })
				.then(() => dispatch(saveAnswer(loginUser, qid, answer)))

	}
}