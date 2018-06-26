// React Library
import React, { Component } from 'react'

// React Redux Connect function
import { connect } from 'react-redux'

// React Router Components
import { BrowserRouter as Router, Route } from 'react-router-dom'

// Handle Initial Data Action Creator
import { handleInitialData } from '../actions/shared'

// Components
import Nav from './Nav'
import Login from './Login'
import QuestionList from './QuestionList'
import QuestionDetails from './QuestionDetails'
import Leaderboard from './Leaderboard'
import NewQuestion from './NewQuestion'

class App extends Component {

	componentDidMount() {
		this.props.dispatch(handleInitialData())
	}

  render() {
    return (
      <Router>
        <div>
          {
            !this.props.showLogin &&
            <Nav />
          }
          <div className='container'>
            <div>
              <Route path='/login' exact component={Login} />
              <Route path='/' exact component={QuestionList} />
              <Route path='/questionDetails/:id' component={QuestionDetails} />
              <Route path='/leaderboard' exact component={Leaderboard} />
              <Route path='/add' exact component={NewQuestion} />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

function mapStateToProps({ loginUser }) {

  return {
    showLogin: loginUser === null
  }
}

export default connect(mapStateToProps)(App)
