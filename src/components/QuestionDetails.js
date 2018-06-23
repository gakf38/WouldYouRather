// React Library
import React, { Component } from 'react'

// React Redux Connect function
import { connect } from 'react-redux'

// React Router Redirect Component
import { Redirect } from 'react-router-dom'

class QuestionDetails extends Component {

	state = {}

	handleVote = (e, option) => {

		e.preventDefault()

		// TODO: Cast the vote for the given option

	}

	render() {

		const { question, optionOneSelected, optionOneVotePercentage, optionTwoSelected, optionTwoVotePercentage, loginUser } = this.props

		return (
			<div className='question-details'>
				<h2 className='center'>Would You Rather...?</h2>
				<div className='author-details'>
					<img src='https://tylermcginnis.com/would-you-rather/sarah.jpg' className='user-avatar'/>
					<h3>{question.author}</h3>
				</div>
				{
					(optionOneSelected !== true && optionTwoSelected !== true) &&
					<div className='options-details'>
						<div className='option'>
							<p className='center'>{question.optionOne.text}</p>
							<button className='btn' onClick={(e) => this.handleVote(e, 1)}>Vote</button>
						</div>
						<div className='option'>
							<p className='center'>{question.optionTwo.text}</p>
							<button className='btn' onClick={(e) => this.handleVote(e, 2)}>Vote</button>
						</div>
					</div>
				}
				{
					(optionOneSelected === true || optionTwoSelected === true) &&
					<div className='options-details'>
						<div className='option'>
							<p className='center'>{question.optionOne.text}</p>
							<p className='center'>Vote Count: {question.optionOne.votes.length}</p>
							<p className='center'>Vote Percentage: {optionOneVotePercentage}%</p>
						</div>
						<div className='option'>
							<p className='center'>{question.optionTwo.text}</p>
							<p className='center'>Vote Count: {question.optionTwo.votes.length}</p>
							<p className='center'>Vote Percentage: {optionTwoVotePercentage}%</p>
						</div>
					</div>
				}
			</div>
		)
	}
}

function mapStateToProps({ questions, loginUser }, props) {

	const { id } = props.match.params

	return {
		question: questions[id],
		optionOneSelected: questions[id].optionOne.votes.indexOf(loginUser) > -1,
		optionOneVotePercentage: (questions[id].optionOne.votes.length / (questions[id].optionOne.votes.length + questions[id].optionTwo.votes.length)) * 100,
		optionTwoSelected: questions[id].optionTwo.votes.indexOf(loginUser) > -1,
		optionTwoVotePercentage: (questions[id].optionTwo.votes.length / (questions[id].optionOne.votes.length + questions[id].optionTwo.votes.length)) * 100,
		loginUser
	}

}

export default connect(mapStateToProps)(QuestionDetails)