import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import UserProfile from 'components/profile/getProfile';
import Follow from 'components/follow/Follow';
import { fetchProfile } from 'store/actions/profiles/profileActions';
import { mapStateToProps } from 'store/helpers';
import * as PropTypes from 'prop-types';
import DefaultLayout from 'containers/layout/DefaultLayout';
import { updateProfile } from '../../store/actions/profiles/profileActions';
import { addFollow, fetchFollowers } from '../../store/actions/follow';

class ProfilesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      bio: '',
      image: '',
      isFollowing: false,
      followers: [],
      following: [],
    };
    this.profileFetch();
  }

  componentWillMount() {
    this.audience(this.props);
    this.props.fetchFollowers();
  }

  componentWillReceiveProps(nextProps, nextContext) {
    this.audience(nextProps);
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.profileUpdate();
  };

  handleUpload = () => {
    const imageview = window.cloudinary.openUploadWidget(
      {
        cloudName: process.env.REACT_APP_CLOUD_NAME,
        uploadPreset: process.env.REACT_APP_UPLOAD_PRESET,
        folder: process.env.REACT_APP_FOLDER,
      },
      (error, result) => {
        if (result.event === 'success') {
          this.setState({
            image: result.info.secure_url,
          });

          imageview.close();
        }
      },
    );
    imageview.open();
  };

  handleEdit = () => {
    this.setState(prevState => ({ isEditing: !prevState.isEditing }));
  };

  profileUpdate = () => {
    const { updateHandler } = this.props;
    const { user } = this.props;
    updateHandler({ bio: this.state.bio, image: this.state.image }, user.username);
    this.setState(prevState => ({ isEditing: !prevState.isEditing }));
  };

  profileFetch = () => {
    const { fetchUserProfile } = this.props;
    const { match } = this.props;
    const { username } = match.params;
    fetchUserProfile(username);
  };

  handleFollow = () => {
    const { followUser } = this.props;
    const { match } = this.props;
    const { isFollowing } = this.state;
    const { username } = match.params;
    followUser(username, isFollowing);
  };

  audience(props) {
    const { followersAndFollowing, match } = props;
    const { follower, following } = followersAndFollowing;

    const isFollowingUser = following.filter(
      userIFollow => match.params.username === userIFollow.username,
    );

    const isFollowing = isFollowingUser.length > 0;

    this.setState({ isFollowing, followers: follower, following });
  }

  render() {
    const { match, user } = this.props;
    const { isEditing, isFollowing } = this.state;
    const { profiles } = this.props;

    return (
      <DefaultLayout>
        <UserProfile
          profiles={profiles}
          isEditing={isEditing}
          username={match.params.username}
          email={match.params.email}
          bio={match.params.bio}
          image={this.props.image}
          user={user}
          handleEdit={this.handleEdit}
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          profileUpdate={this.profileUpdate}
          handleUpload={this.handleUpload}
        />
        <Follow onClick={this.handleFollow} isFollowing={isFollowing} />
      </DefaultLayout>
    );
  }
}
ProfilesContainer.propTypes = {
  match: PropTypes.any.isRequired,
  image: PropTypes.any.isRequired,
  user: PropTypes.any.isRequired,
  updateHandler: PropTypes.any.isRequired,
  fetchUserProfile: PropTypes.any.isRequired,
  profiles: PropTypes.any.isRequired,
  followUser: PropTypes.any.isRequired,
  fetchFollowers: PropTypes.func.isRequired,
};
const mapActionsToProps = dispatch => ({
  fetchUserProfile: username => dispatch(fetchProfile(username)),
  updateHandler: (profile, username) => dispatch(updateProfile(profile, username)),
  followUser: (username, isFollowing) => dispatch(addFollow(username, isFollowing)),
  fetchFollowers: () => dispatch(fetchFollowers()),
});

export default withRouter(
  connect(
    mapStateToProps({
      user: 'authentication.user',
      profiles: 'profiles',
      followersAndFollowing: 'addFollow.followersAndFollowing',
    }),
    mapActionsToProps,
  )(ProfilesContainer),
);
