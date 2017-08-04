import React, {Component} from 'react';
import CommentsList from './commentsList.js';
import PropTypes from 'prop-types';
import toggleOpen from '../decorators/toggleOpen'

class Article extends Component {
  static propTypes = {
    comments: PropTypes.shape({
      id: PropTypes.string.isRequired,
      user: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  }

  render() {
    const {article, isOpen, toggleOpen} = this.props;
    return (
      <div>
        <h1>{article.title}</h1>
        <button onClick={toggleOpen}>{!isOpen ? 'Open' : 'Close'}</button>
        {this.getBody()}
      </div>
      )
  }

  getBody() {
    const {article, isOpen} = this.props;
    if(!isOpen) return null;
    return (
      <div>
        <p>{article.text}</p>
        <CommentsList comments={article.comments}/>
      </div>
    )
  }
}

export default Article
