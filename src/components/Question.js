// React Library
import React, { Component } from 'react'

// React Redux Connect function
import { connect } from 'react-redux'

class Question extends Component {

	render() {
		return (
			<div class='question'>
				<h3 className='center'>Author Name</h3>
				<hr/>
				<h5 className='center'>Would you rather...</h5>
				<div className='options'>
					<div className='option-one'>
						<p className='center'>Be a professional baseball player?</p>
					</div>
					<div className='option-two'>
						<p className='center'>Be a professional football player?</p>
					</div>
				</div>
			</div>
		)
	}
}

export default connect()(Question)