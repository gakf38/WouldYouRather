// Questions Action Types
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'

// Receive Questions Action Creator Function
export function receiveQuestions(questions) {
	return {
		type: RECEIVE_QUESTIONS,
		questions
	}
}