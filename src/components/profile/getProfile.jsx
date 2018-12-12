import React from 'react';
import PropTypes from 'prop-types';

const UserProfile = props => (
  <form>
    <div className="container">
      <div className="card mb-3 my-5">
        <div className="card-body">
          <div>
            <div>
              <div>
                {props.isEditing ? (
                  <div>
                    <div>
                      <input
                        value="upload profile picture"
                        id="image-upload"
                        onClick={props.handleUpload}
                        type="button"
                        className="btn btn-primary btn-sm "
                      />
                    </div>
                    <br />
                    <div className="form-group">
                      <label htmlFor="username" className="has-input">
                        Username
                        <input
                          id="profile-username"
                          type="text"
                          name="username"
                          className="form-control"
                          onChange={props.onChange}
                          value={props.username}
                        />
                      </label>
                    </div>
                    <div className="form-group">
                      <label htmlFor="email" className="has-input">
                        Email
                        <input
                          id="profile-email"
                          type="text"
                          name="email"
                          className="form-control"
                          onChange={props.onChange}
                          value={props.user.email}
                        />
                      </label>
                    </div>
                    <div className="form-group">
                      <label htmlFor="bio" className="has-input">
                        Bio
                        <textarea
                          rows="4"
                          cols="50"
                          id="bio"
                          type="text"
                          name="bio"
                          className="form-control"
                          onChange={props.onChange}
                          defaultValue={props.profiles.bio}
                        />
                      </label>
                    </div>
                  </div>
                ) : (
                  <div className="d-flex flex-wrap align-items-center justify-content-between">
                    <div>
                      <h4>User Name </h4>
                      {props.username}
                      <br />
                      {props.profiles.bio}
                    </div>
                    <div>
                      <img
                        src={
                          props.profiles.image
                            ? props.profiles.image
                            : 'http://www.macmillanenglish.com/img/author-image.png'
                        }
                        className="img-thumbnail profile-pic"
                        alt="user profile"
                      />
                    </div>
                  </div>
                )}
              </div>
              <input
                type="button"
                onClick={props.isEditing ? props.onSubmit : props.handleEdit}
                value={props.isEditing ? 'Save Changes' : 'Update Profile'}
                className="btn btn-primary btn-sm "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
);

UserProfile.propTypes = {
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  user: PropTypes.any.isRequired,
  profiles: PropTypes.any.isRequired,
  bio: PropTypes.string.isRequired,
  image: PropTypes.any.isRequired,
  handleEdit: PropTypes.func.isRequired,
  isEditing: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.any.isRequired,
  handleUpload: PropTypes.func.isRequired,
};

export default UserProfile;
