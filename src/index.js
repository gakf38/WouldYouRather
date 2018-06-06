// React imports
import React from 'react'
import ReactDOM from 'react-dom'

// Redux imports
import { createStore } from 'redux'

// Custom imports
import './index.css'
import App from './components/App'
import reducers from './reducers'

const store = createStore(reducers)

ReactDOM.render(<App />, document.getElementById('root'))