// React Library
import React, { Component } from 'react'

// NavLink Component
import { NavLink } from 'react-router-dom'

class Nav extends Component {

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
        </ul>
        <hr/>
      </nav>
    )
  }
}

export default Nav