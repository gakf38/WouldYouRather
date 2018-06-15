// React Library
import React, { Component } from 'react'

// React Redux Connect function
import { connect } from 'react-redux'

// Handle Initial Data Action Creator
import { handleInitialData } from '../actions/shared'

// Components
import Login from './Login'
import QuestionList from './QuestionList'
import QuestionDetails from './QuestionDetails'

class App extends Component {

	componentDidMount() {
		this.props.dispatch(handleInitialData())
	}

  render() {
    return (
      <div className='container'>
        <QuestionDetails />
      </div>
    );
  }
}

function mapStateToProps({ loginUser }) {
  return {
    showLogin: loginUser === null
  }
}

export default connect(mapStateToProps)(App)
