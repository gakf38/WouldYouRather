// React Library
import React, { Component } from 'react'

// React Redux Connect function
import { connect } from 'react-redux'

class Login extends Component {

	render() {
		return (
			<div className='login-form'>
				<h3 className='center'>Would You Rather...?</h3>
				<form className='login-form'>
					<input className='input' type='text' placeholder='Who are you?'/>
					<button className='btn' type='button'>Login</button>
				</form>
			</div>
		)
	}
}

export default connect()(Login)