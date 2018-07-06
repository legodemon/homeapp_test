import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import App from './App'
import configureStore from './store/configureStore'

import './styles/index.scss'

ReactDOM.render(<Provider store={configureStore()}><App/></Provider>, document.getElementById('container'))
