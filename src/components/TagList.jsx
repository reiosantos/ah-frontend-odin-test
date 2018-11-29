import React from 'react';
import PropTypes from 'prop-types';

const TagList = ({ tags }) => (
  <div>
    {tags.map(tag => (
      <span key={tag} className="badge badge-pill badge-primary h4 ml-1 px-3">
        {tag}
      </span>
    ))}
  </div>
);

TagList.propTypes = {
  tags: PropTypes.array.isRequired,
};

export default TagList;
