import React, {Component as ReactComponent} from 'react';

export default (OriginalComponent) => class Accordion extends ReactComponent {
  state = {
    openArticleId: null
  }

  render() {
    return (<OriginalComponent {...this.state} {...this.props} toggleOpenArticle={this.toggleOpenArticle} />);
  }

  toggleOpenArticle = openArticleId => {
    this.setState({ openArticleId: this.state.openArticleId === openArticleId ? null : openArticleId })
  }
}
