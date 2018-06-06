// React imports
import React from 'react'
import ReactDOM from 'react-dom'

// Redux imports
import { createStore } from 'redux'
import { Provider } from 'react-redux'

// Custom imports
import './index.css'
import App from './components/App'
import reducers from './reducers'
import middleware from './middleware'

// Create the Redux Store using the defined Root Reducer and Middleware function(s)
const store = createStore(reducers, middleware)

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>
	, document.getElementById('root'))