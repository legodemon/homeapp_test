import React from 'react'
// import PropTypes from 'prop-types'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import * as actions from './actions'

class App extends React.Component {
  render() {
    console.log(this.props)

    return <p>Hello</p>
  }
}

export default connect(state => ({store: state}), dispatch => ({actions: bindActionCreators(actions, dispatch)}))(App)