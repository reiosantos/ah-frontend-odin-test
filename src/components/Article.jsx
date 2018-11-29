import React from 'react';
import PropTypes from 'prop-types';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';
import TagList from './TagList';

const Article = ({ article }) => {
  const ago = distanceInWordsToNow(article.updated_at, { includeSeconds: true, addSuffix: ' ago' });
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h4 className="card-title">{article.title}</h4>
        <div className="d-flex flex-wrap align-items-center justify-content-between">
          <TagList tags={article.tagList} />
          <small className="font-italic pl-2">
            Created <strong>{ago}</strong>
          </small>
          <small>
            {article.read_time} <strong>read</strong>
          </small>
        </div>
      </div>
    </div>
  );
};

Article.propTypes = {
  article: PropTypes.object.isRequired,
};

export default Article;
