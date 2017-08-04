import React, {Component} from 'react';
import Article from './article'
import accordion from '../decorators/accordion'

class ArticleList extends Component {
  render() {
    const {openArticleId, toggleOpenArticle} = this.props
    const articleList = this.props.articles.map(article => <li key={article.id}>
         <Article article={article}
           isOpen={article.id === openArticleId}
           toggleOpen={toggleOpenArticle.bind(this, article.id)}/>
       </li>)
    return (<ul>{articleList}</ul>)
  }
}

export default accordion(ArticleList);
