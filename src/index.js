import React from 'react';
import { render } from 'react-dom';
import App from './components/app'
import { articles } from './fixtures'

const allArticles = articles;

render(<App articles={allArticles} />, document.querySelector('#container'))
