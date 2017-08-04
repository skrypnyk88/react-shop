import React, {Component} from 'react';
import Comment from './comment';
import PropTypes from 'prop-types'
import toggleOpen from '../decorators/toggleOpen'

class CommentsList extends Component {
  render() {
    const {article, isOpen, toggleOpen} = this.props;
    return (
      <div>
        <button onClick={toggleOpen}>{!isOpen ? 'Show comment' : 'Hide comment'}</button>
        {this.renderComments()}
      </div>
    )
  }

  renderComments = () => {
    const {comments, isOpen} = this.props;
    if(!isOpen) return null;
    if(comments == undefined) return (<p>There is no commets</p>);
    const commentList = comments.map(comment => <li key={comment.id}><Comment comment={comment}/></li>);
    return (<ul>{commentList}</ul>)
  }
}

export default toggleOpen(CommentsList)
