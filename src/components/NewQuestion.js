// React Library
import React, { Component } from 'react'

// React Redux Connect function
import { connect } from 'react-redux'

// React Router Redirect Component
import { Redirect } from 'react-router-dom'

class NewQuestion extends Component {

	state = {
		'optionOne': '',
		'optionTwo': ''
	}

	handleOptionOneChange = (e) => {

		const optionOne = e.target.value

		this.setState(()=>({
			optionOne
		}))
	}

	handleOptionTwoChange = (e) => {

		const optionTwo = e.target.value

		this.setState(()=>({
			optionTwo
		}))
	}

	addQuestion = (e, optionOne, optionTwo) => {

		e.preventDefault()

		// Dispatch the Add Question Action
	}

	render() {

		const { optionOne, optionTwo } = this.state

		if ( !this.props.loginUser )
		{
			return <Redirect to={{
				pathname: '/login',
				state: {
					returnPath: '/add'
				}
			}} />
		}

		return (
			<div className='add-question'>
				<h3 className='center'>Add a Question</h3>
				<form className='add-question-form' onSubmit={(e) => this.addQuestion(e, optionOne, optionTwo)}>
					<input 
						id='optionOne' 
						className='input' 
						type='text' 
						placeholder='Option One' 
						value={optionOne}
						onChange={this.handleOptionOneChange}
					/>
					<input 
						id='optionTwo' 
						className='input' 
						type='text' 
						placeholder='Option Two' 
						value={optionTwo}
						onChange={this.handleOptionTwoChange}
					/>
					{
						(optionOne && optionTwo)
						? <button className='btn' type='submit'>Ask Question</button>
						: <button className='btn' type='button' disabled>Ask Question</button>
					}
				</form>
			</div>
		)
	}
}

function mapStateToProps({ loginUser }) {
	return {
		loginUser
	}
}

export default connect(mapStateToProps)(NewQuestion)