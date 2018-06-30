// React Library
import React, { Component } from 'react'

// React Redux Connect function
import { connect } from 'react-redux'

// NavLink Component
import { NavLink } from 'react-router-dom'

// React Icons exit to app icon
import Logout from 'react-icons/lib/md/exit-to-app'

// Logout User Action Creator
import { logoutUser } from '../actions/loginUser'

class Nav extends Component {

  // Dispatch the logoutUser Action
  logoutUser = () => {
    const { dispatch } = this.props;

    dispatch(logoutUser());
  }

  render () {
    return (
      <nav className='nav'>
        <ul>
          <li>
            <NavLink to='/' exact activeClassName='active'>
              Questions
            </NavLink>
          </li>
          <li>
            <NavLink to='/leaderboard' exact activeClassName='active'>
              Leaderboard
            </NavLink>
          </li>
          <li>
            <NavLink to='/add' exact activeClassName='active'>
              New Question
            </NavLink>
          </li>
          <li className='user-details'>
            <p>{this.props.loginUser}</p>
            <span onClick={this.logoutUser}><Logout size={30}/></span>
          </li>
        </ul>
        <hr/>
      </nav>
    )
  }
}

function mapStateToProps({ loginUser }) {
  return {
    loginUser
  }
}

export default connect(mapStateToProps)(Nav)