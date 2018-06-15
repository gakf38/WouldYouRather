// React Library
import React, { Component } from 'react'

// React Redux Connect function
import { connect } from 'react-redux'

// Components
import Question from './Question'

class QuestionList extends Component {

	state = {
		answered: false
	}
	
	toggleAnswered = (e, answered) => {

		e.preventDefault()

		this.setState(() => ({
			answered
		}))
	}


	render() {

		return (
			<div className ='questions-list'>
				<div className='btn-list-group'>
					<button className='btn' onClick={(e) => this.toggleAnswered(e, false)}>Unanswered</button>
					<button className='btn' onClick={(e) => this.toggleAnswered(e, true)}>Answered</button>
				</div>
				{
					this.state.answered === true
					? <h3 className='center'>Answered Questions</h3>
					: <h3 className='center'>Unanswered Questions</h3>
				}
				<ul>
				{
					this.state.answered
					? this.props.answeredQuestionIds.map((id) => (
						<li key={id}><Question id={id}/></li>
					))
					: this.props.unansweredQuestionIds.map((id) => (
						<li key={id}><Question id={id}/></li>
					))
				}
				</ul>
			</div>
		)
	}
}

function mapStateToProps({ questions, loginUser }) {
	return {
		answeredQuestionIds: Object.keys(questions)
								.filter((question) => (questions[question].optionOne.votes.indexOf(loginUser) > -1) || (questions[question].optionTwo.votes.indexOf(loginUser) > -1))
								.sort((a,b) => questions[b].timestamp - questions[a].timestamp),
		unansweredQuestionIds: Object.keys(questions)
								.filter((question) => (questions[question].optionOne.votes.indexOf(loginUser) === -1) && (questions[question].optionTwo.votes.indexOf(loginUser) === -1))
								.sort((a,b) => questions[b].timestamp - questions[a].timestamp)
	}
}

export default connect(mapStateToProps)(QuestionList)