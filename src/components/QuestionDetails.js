// React Library
import React, { Component } from 'react'

// React Redux Connect function
import { connect } from 'react-redux'

class QuestionDetails extends Component {

	render() {

		return (
			<div className='question-details'>
				<h2 className='center'>Would You Rather...?</h2>
				<div className='author-details'>
					<img src='https://tylermcginnis.com/would-you-rather/sarah.jpg' className='user-avatar'/>
					<h3>Author Name</h3>
				</div>
				<div className='options-details'>
					<div className='option'>
						<p className='center'>Be a professional athlete</p>
						<button className='btn'>Vote</button>
					</div>
					<div className='option'>
						<p className='center'>Be a javascript developer</p>
						<button className='btn'>Vote</button>
					</div>
				</div>
			</div>
		)
	}
}

export default connect()(QuestionDetails)