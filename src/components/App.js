// React Library
import React, { Component } from 'react'

// React Redux Connect function
import { connect } from 'react-redux'

// Handle Initial Data Action Creator
import { handleInitialData } from '../actions/shared'

class App extends Component {

	componentDidMount() {
		this.props.dispatch(handleInitialData())
	}

  render() {
    return (
      <div>
        Hello World
      </div>
    );
  }
}

export default connect()(App)
