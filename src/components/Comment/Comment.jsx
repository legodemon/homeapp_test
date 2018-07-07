import React from 'react'
import { Card, Icon } from 'semantic-ui-react'
import PropTypes from 'prop-types'

class Comment extends React.Component {
  static propTypes = {
    index: PropTypes.number.isRequired,
    getComponentBound: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.commentRef = React.createRef();
  }

  componentDidMount() {
    const {getComponentBound, index} = this.props
    getComponentBound(this.commentRef, index)
  }

  render () {
    const {id, email, body, name, onClick} = this.props
    return <Card ref={this.commentRef} onClick={() => onClick(id)} fluid>
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>
          <span>{email}</span>
        </Card.Meta>
        <Card.Description>{body}</Card.Description>
      </Card.Content>
    </Card>
  }
}

export default Comment