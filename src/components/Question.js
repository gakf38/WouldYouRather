// React Library
import React, { Component } from 'react'

// React Router Library
import { Link, withRouter } from 'react-router-dom'

// React Redux Connect function
import { connect } from 'react-redux'

class Question extends Component {

	render() {

		const { question, loginUser, id } = this.props

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
				<div className='details center'>
					<Link to={`/questionDetails/${id}`}>Details</Link>
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

export default withRouter(connect(mapStateToProps)(Question))