// React Library
import React, { Component } from 'react'

// React Redux Connect function
import { connect } from 'react-redux'

// Components
import Question from './Question'

class QuestionList extends Component {

	render() {

		return (
			<div className ='questions-list'>
				<h2 className='center'>Questions</h2>
				<ul>
				{
					this.props.questionIds.map((id) => (
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
		questionIds: Object.keys(questions).sort((a,b) => questions[b].timestamp - questions[a].timestamp)
	}
}

export default connect(mapStateToProps)(QuestionList)