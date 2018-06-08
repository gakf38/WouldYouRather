// React Library
import React, { Component } from 'react'

// React Redux Connect function
import { connect } from 'react-redux'

// Handle Initial Data Action Creator
import { handleInitialData } from '../actions/shared'

// Components
import Login from './Login'

class App extends Component {

	componentDidMount() {
		this.props.dispatch(handleInitialData())
	}

  render() {
    return (
      <div class='container'>
        <Login />
      </div>
    );
  }
}

export default connect()(App)
