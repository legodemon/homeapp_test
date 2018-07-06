import React from 'react'
import PropTypes from 'prop-types'
import {Modal} from 'semantic-ui-react'

export class ModalEdit extends React.Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    opened: PropTypes.bool.isRequired,
    comment: PropTypes.string.isRequired,
    closeHandler: PropTypes.func.isRequired
  }

  render() {
    const {id, comment, opened, closeHandler} = this.props

    return <Modal size={'tiny'} open={opened} onClose={closeHandler}>
      <Modal.Header>Edit comment</Modal.Header>
      <Modal.Content>
        <p>{comment}</p>
      </Modal.Content>
      <Modal.Actions>
      </Modal.Actions>
    </Modal>
  }
}