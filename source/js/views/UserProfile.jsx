import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { routeCodes } from 'constants/routes';

import { getUser } from 'actions/users';
import { getQuotes } from 'actions/quotes';
import { getAchievements } from 'actions/achievements';

import PostData from 'components/userprofile/PostData'
import CollapsingComponent from 'components/elements/CollapsingComponent'

@connect(state => ({
  error: state.users.get('error'),
  loading: state.users.get('loading'),
  quotesError: state.quotes.get('error'),
  quotesLoading: state.quotes.get('loading'),
  achievementsError: state.achievements.get('error'),
  achievementsLoading: state.achievements.get('loading'),
  user: state.users.get('user'),
  quotes: state.quotes.get('quotes'),
  achievements: state.achievements.get('achievements'),
}))
export default class UserProfile extends Component {
  static propTypes = {
    error: PropTypes.string,
    loading: PropTypes.bool,
    users: PropTypes.object,
    quotes: PropTypes.object,
    achievements: PropTypes.object,
    params: PropTypes.object,
    // from react-redux connect
    dispatch: PropTypes.func,
  }

  componentWillMount() {
    const {
      dispatch,
      user,
      match: { params },
    } = this.props;
    if (!user) {
      dispatch(getUser(params.userId));
      dispatch(getQuotes(params.userId));
      dispatch(getAchievements(params.userId));
    } else if (user.results.UserId !== params.userId) {
      dispatch(getUser(params.userId));
      dispatch(getQuotes(params.userId));
      dispatch(getAchievements(params.userId));
    }
  }

  renderUser() {
    const {
      results: user,
    } = this.props.user;
    return (
      <div>
        <div className='user-header'>
          <div className='avatar-box'>
            <img className='avatar' src={user.AvatarUrl || 'https://cdn.discordapp.com/embed/avatars/0.png'} />
          </div>
          <div className='username'>{user.UserName || "Ghost in a Shell"}</div>
        </div>
        <CollapsingComponent wrapperClass='post-data-wrapper' headerClass='details-header' title='Post Data'>
          <PostData dataTitle='Total Posts' posts={user.Posts} />
          {user.ChannelPosts.map((channel) => {
            return (
              <PostData dataTitle={channel.ChannelName} posts={channel.PostCounts} />
            );
          })}
        </CollapsingComponent>
      </div>
    );
  }
  renderQuotes() {
    const {
      results: quotes,
    } = this.props.quotes;
    return (
      <div>
        <CollapsingComponent wrapperClass='' headerClass='details-header' title='Quotes' opened={true}>
          {quotes.map((quote) => {
            return (
              <div className='quote-wrapper'><span className='iconicstroke-left-quote' /><div key={quote.QuoteId}>{quote.QuoteText}</div><span className='iconicstroke-right-quote' /></div>
            );
          })}
        </CollapsingComponent>
      </div>
    );
  }
  renderAchievements() {
    const {
      results: achievements,
    } = this.props.achievements;
    return (
      <div>
        <CollapsingComponent wrapperClass='' headerClass='details-header' title='Achievements' opened={true}>
          {achievements.map((achievement) => {
            return (
              <div className='quote-wrapper'>
                <div key={achievements.AchievementId}>{achievement.Name}</div>
              </div>
            );
          })}
        </CollapsingComponent>
      </div>
    );
  }

  render() {
    const {
      loading,
      error,
      user,
      quotes,
      achievements,
    } = this.props;

    return (
      <div>
        <h1>User Details</h1>
        {loading && <div>Loading info...</div>}
        {error && error.toString()}
        <div className='user-details'>
          {user && this.renderUser()}
          {quotes && this.renderQuotes()}
          {achievements && this.renderAchievements()}
        </div>
      </div>
    );
  }
}
