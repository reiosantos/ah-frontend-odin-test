import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DefaultLayout from 'containers/layout/DefaultLayout';
import { getAllArticles } from 'store/actions/articles';
import JoinPlatiformSection from 'components/sections/JoinPlatiformSection';
import LatestArticlesSection from 'components/sections/LatestArticlesSection';
import { showSignUp } from '../store/actions/actionCreators';

class IndexPage extends React.Component {
  componentWillMount() {
    this.props.fetchAllArticles();
  }

  render() {
    const { showSignUpModal } = this.props;
    return (
      <DefaultLayout className="indexPage">
        <LatestArticlesSection articles={this.props.articles} />
        <JoinPlatiformSection showSignUpModal={showSignUpModal} />
      </DefaultLayout>
    );
  }
}

IndexPage.propTypes = {
  articles: PropTypes.array.isRequired,
  fetchAllArticles: PropTypes.func.isRequired,
  showSignUpModal: PropTypes.func.isRequired,
};

const mapStateToProps = ({ articles }) => ({ articles: articles.all });
export const mapActionsToProps = dispatch => ({
  fetchAllArticles: () => dispatch(getAllArticles()),
  showSignUpModal: () => dispatch(showSignUp(true)),
});

export default connect(
  mapStateToProps,
  mapActionsToProps,
)(IndexPage);
