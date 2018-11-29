import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DefaultLayout from 'containers/layout/DefaultLayout';
import { getAllArticles } from 'store/actions/articles';
import JoinPlatiformSection from 'components/sections/JoinPlatiformSection';
import LatestArticlesSection from 'components/sections/LatestArticlesSection';

class IndexPage extends React.Component {
  componentWillMount() {
    this.props.fetchAllArticles();
  }

  render() {
    return (
      <DefaultLayout className="indexPage">
        <LatestArticlesSection articles={this.props.articles} />
        <JoinPlatiformSection />
      </DefaultLayout>
    );
  }
}

IndexPage.propTypes = {
  articles: PropTypes.array.isRequired,
  fetchAllArticles: PropTypes.func.isRequired,
};

const mapStateToProps = ({ articles }) => ({ articles: articles.all });
const mapActionsToProps = dispatch => ({ fetchAllArticles: () => dispatch(getAllArticles()) });

export default connect(
  mapStateToProps,
  mapActionsToProps,
)(IndexPage);
