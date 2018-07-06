import React from 'react'
import PropTypes from 'prop-types'
import {Modal, Form, Button, Icon} from 'semantic-ui-react'
import {SAVE_COMMENT_REQUEST, SAVE_COMMENT_SUCCESS, SAVE_COMMENT_ERROR} from '../../const/const'


export class ModalEdit extends React.Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    opened: PropTypes.bool.isRequired,
    comment: PropTypes.string.isRequired,
    status: PropTypes.oneOf([SAVE_COMMENT_REQUEST, SAVE_COMMENT_SUCCESS, SAVE_COMMENT_ERROR]),
    closeHandler: PropTypes.func.isRequired,
    saveHandler: PropTypes.func.isRequired,
  }

  state = {comment: this.props.comment}

  onChange = e => this.setState({comment: e.target.value})

  onSave = () => this.props.saveHandler(this.props.id, this.state.comment)

  render() {
    const {opened, closeHandler, status} = this.props

    return <Modal size={'tiny'} open={opened} onClose={closeHandler}>
      <Modal.Header>Edit comment</Modal.Header>
      <Modal.Content>
        <Form loading={status === SAVE_COMMENT_REQUEST}>
          <Form.Field
            label={'Comment'}
            name={'comment'}
            control={'textarea'}
            rows={'5'}
            value={this.state.comment}
            onChange={this.onChange}
          />
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button color='red' onClick={closeHandler}>Cancel</Button>
        <Button color='green' onClick={this.onSave}>
          <Icon name='checkmark'/> Yes
        </Button>
      </Modal.Actions>
    </Modal>
  }
}