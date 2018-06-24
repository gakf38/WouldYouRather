// React Library
import React, { Component } from 'react'

// React Redux Connect function
import { connect } from 'react-redux'

// React Router Redirect Component
import { Redirect } from 'react-router-dom'

class Leaderboard extends Component {

	render() {

		if ( !this.props.loginUser )
		{
			return <Redirect to={{
				pathname: '/login',
				state: {
					returnPath: '/leaderboard'
				}
			}} />
		}

		return (
			<div className='leaderboard'>
				<h3 className='center'>Leaderboard</h3>
				<table className='leaderboard-table'>
					<thead>
						<tr>
							<th>Ranking</th>
							<th>User</th>
							<th>Questions Asked</th>
							<th>Questions Answered</th>
						</tr>
					</thead>
					<tbody>
						{
							this.props.users.map((user, index) => (
								<tr key={user.id}>
									<td>{index + 1}</td>
									<td>{user.name}</td>
									<td>{user.questions.length}</td>
									<td>{Object.keys(user.answers).length}</td>
								</tr>
							))
						}
					</tbody>
				</table>
			</div>
		)
	}
}

function mapStateToProps({ users, loginUser }) {

	return {
		users: Object.keys(users).sort((a,b) => (users[b].questions.length + Object.keys(users[b].answers).length) - (users[a].questions.length + Object.keys(users[a].answers).length)).map((user) => users[user]),
		loginUser
	}
}

export default connect(mapStateToProps)(Leaderboard)