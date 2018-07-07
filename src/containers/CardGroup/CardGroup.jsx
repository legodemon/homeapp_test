import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import Comment from '../../components/Comment/Comment'

export class CardGroup extends React.Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
    openModal: PropTypes.func.isRequired,
  }

  state = {
    componentBound: [],
    first: 0,
    last: 9,
    scrollY: window.scrollY
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll, false)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll, false)
  }

  onScroll = () => {
    const {componentBound, last, first, scrollY} = this.state
    const {data} = this.props

    if (window.scrollY - scrollY > 0) {
      if (componentBound.find(({bottom}) => bottom <= window.scrollY) && last < data.length - 1) {
        this.setState(prevState => ({
          first: prevState.first + 1,
          last: prevState.last + 1
        }))
      }
    } else {
      if (componentBound.find(({top}) => top >= window.innerHeight + window.scrollY) && first > 0) {
        this.setState(prevState => ({
          first: prevState.first - 1,
          last: prevState.last - 1
        }))
      }
    }
    this.setState({scrollY: window.scrollY})
  }

  getComponentBound = ({current}, index) => {
    const {bottom, top} = ReactDOM.findDOMNode(current).getBoundingClientRect()
    this.setState(prevState => ({
      componentBound: [...prevState.componentBound, {index: index, top: top, bottom: bottom}]
    }))
  }

  range = (start, end) => (new Array(end - start + 1)).fill(undefined).map((_, i) => i + start)

  render() {
    const {first, last} = this.state
    const {data, openModal} = this.props

    return <div className={'cards-group'}>
      {this.range(first, last)
        .map(index =>
          <Comment
            getComponentBound={this.getComponentBound}
            {...data[index]}
            onClick={openModal}
            index={index}
            key={`comment-${index}`}
          />
        )}
    </div>
  }
}