import React from 'react'
import PropTypes from 'prop-types'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Card, Loader} from 'semantic-ui-react'

import * as actions from './actions'

class App extends React.Component {

  static propTypes = {
    actions: PropTypes.shape({
      getData: PropTypes.func.isRequired,
    }),
    store: PropTypes.object
  }

  componentDidMount() {
    this.props.actions.getData()
  }

  render() {
    const {store: {loading, data}} = this.props
    return !loading
      ? <Card.Group items={data.map(({id, name, email, body}) => ({header: name, description: body, meta: email}))}/>
      : <Loader active inline='centered'/>
  }
}

export default connect(state => ({store: state}), dispatch => ({actions: bindActionCreators(actions, dispatch)}))(App)