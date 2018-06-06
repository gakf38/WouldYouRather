// Questions Action Types
const export RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'

// Receive Questions Action Creator Function
export function receiveQuestions(questions) {
	return {
		type: RECEIVE_QUESTIONS,
		questions
	}
}