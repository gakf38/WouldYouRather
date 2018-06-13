// React Library
import React, { Component } from 'react'

// React Redux Connect function
import { connect } from 'react-redux'

// Helper Functions
import { formatDate } from '../utils/helpers' 

class Question extends Component {

	render() {

		const { question, loginUser } = this.props

		console.log('Question', question)

		return (
			<div className='question'>
				<h3 className='center'>Would you rather...</h3>
				<div className='options'>
					<div className='option-one'>
						<p className='center'>{question.optionOne.text}</p>
					</div>
					<div className='option-two'>
						<p className='center'>{question.optionTwo.text}</p>
					</div>
				</div>
				<hr/>
				<p className='center'>{question.author} at {formatDate(question.timestamp)}</p>
			</div>
		)
	}
}

function mapStateToProps({ questions, loginUser }, { id }) {
	return {
		question: questions[id],
		optionOneSelected: questions[id].optionOne.votes.indexOf(loginUser) > -1,
		optionTwoSelected: questions[id].optionTwo.votes.indexOf(loginUser) > -1,
		loginUser
	}
}

export default connect(mapStateToProps)(Question)