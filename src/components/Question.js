// React Library
import React, { Component } from 'react'

// React Redux Connect function
import { connect } from 'react-redux'

class Question extends Component {

	render() {

		const { question, loginUser } = this.props

		return (
			<div className='question'>
				<div className='options'>
					<div className='option'>
						<p className='center'>{question.optionOne.text}</p>
					</div>
					<div className='divider'>
						<p className='center'>or</p>
					</div>
					<div className='option'>
						<p className='center'>{question.optionTwo.text}</p>
					</div>
				</div>
				<div className='details'>
					<p className='center'>Details</p>
				</div>
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