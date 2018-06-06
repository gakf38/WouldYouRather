// Questions Action Types
import { RECEIVE_QUESTIONS } from '../actions/questions'

// Questions Reducer Function
export default function questions (state = {}, action) {

	switch (action.type) {

		case RECEIVE_QUESTIONS :
			return {
				...state,
				action.questions
			}

		default :
			return state
	}
}