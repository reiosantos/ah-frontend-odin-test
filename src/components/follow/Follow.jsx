import React from 'react';
import PropTypes from 'prop-types';

const Follow = ({ onClick, isFollowing }) => (
  <div className="container">
    <div className="card mb-3 my-5">
      <div className="card-body">
        <button type="button" id="bt-follow" className="btn btn-primary btn-sm" onClick={onClick}>
          {!isFollowing ? 'Follow' : 'UnFollow'}
        </button>
        <hr />
        <p>Follows</p>
        <hr />
        <p>Following</p>
      </div>
    </div>
  </div>
);

Follow.propTypes = {
  onClick: PropTypes.func.isRequired,
  isFollowing: PropTypes.bool.isRequired,
};

export default Follow;
