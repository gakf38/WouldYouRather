// React Library
import React, { Component } from 'react'

// React Redux Connect function
import { connect } from 'react-redux'

// loginUser Function
import { loginUser } from '../actions/loginUser'

class Login extends Component {

	state = {
		username: '',
		loginFail: false
	}

	// Used for the Controlled Component
	handleChange = (e) => {

		const username = e.target.value

		this.setState(() => ({
			username
		}))
	}

	handleLogin = (e) => {

		e.preventDefault()

		const { username } =  this.state
		const { dispatch, usernames } = this.props

		// Check if the given Username matches an existing User
		if (usernames.indexOf(username) === 1) {

			// Dispatch the LOGIN_USER action
			dispatch(loginUser(username))

			// Reset the component State
			this.setState({
				username: '',
				loginFail: false
			})
		}
		else {
			// Set the component State for a failed login
			this.setState({
				username: '',
				loginFail: true
			})
		}
	}

	render() {

		const { username } = this.state

		return (
			<div className='login-form'>
				<h3 className='center'>Would You Rather...?</h3>
				<form className='login-form' onSubmit={this.handleLogin}>
					<input 
						className='input' 
						type='text' 
						placeholder='Who are you?' 
						value={username} 
						onChange={this.handleChange}
					/>
					{
						this.state.loginFail &&
							<p className='login-error'>Invalid Username. Try again.</p>
					}
					<button className='btn' type='submit'>Login</button>
				</form>
			</div>
		)
	}
}

// Map the usernames to the Component props
function mapStateToProps({ users }) {
	return {
		usernames: Object.keys(users)
	}
}

export default connect(mapStateToProps)(Login)