import React from 'react'
import PropTypes from 'prop-types'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Card, Loader, Modal} from 'semantic-ui-react'

import {ModalEdit} from './components/ModalEdit/ModalEdit'

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

  closeModal = () => this.props.actions.closeModal()

  render() {
    const {actions: {openModal}, store: {loading, currentEdit, data}} = this.props
    return !loading ? [
      <Card.Group items={data.map(({id, name, email, body}) => ({
        header: name,
        description: body,
        meta: email,
        onClick: () => openModal(id)
      }))} key={'cards-group'}/>,
      currentEdit ? <ModalEdit key={'modal-edit'}
                 closeHandler={this.closeModal}
                 id={currentEdit}
                 comment={data.filter(({id}) => id === currentEdit)[0].body}
                 opened={!!currentEdit}/> : null
    ] : <Loader active inline='centered'/>
  }
}

export default connect(state => ({store: state}), dispatch => ({actions: bindActionCreators(actions, dispatch)}))(App)