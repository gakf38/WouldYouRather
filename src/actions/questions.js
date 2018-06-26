// addNewQuestion API function
import { addNewQuestion } from '../utils/api'

// Questions Action Types
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'

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

// Add New Question Async Action Creator Function
export function handleAddNewQuestion(optionOneText, optionTwoText) {
	return (dispatch, getState) => {
		
		const { loginUser } = getState()

		return addNewQuestion({ optionOneText, optionTwoText, author: loginUser })
				.then((question) => dispatch(addQuestion(question)))
	}
}