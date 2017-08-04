import React, {Component} from 'react';
import ArticleList from './articleList'

class App extends Component {
  render() {
    return (
      <div>
        <ArticleList articles={this.props.articles}/>
      </div>
    )
  }
}

export default App
