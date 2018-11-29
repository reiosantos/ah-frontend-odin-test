import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article';

const Articles = ({ articles }) => (
  <div>
    {articles.map(article => (
      <Article article={article} key={article.slug} />
    ))}
  </div>
);

Articles.propTypes = {
  articles: PropTypes.array.isRequired,
};

export default Articles;
