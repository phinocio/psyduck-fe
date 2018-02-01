import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { routeCodes } from 'constants/routes';

import { getUser } from 'actions/users';
import { getQuotes } from 'actions/quotes';
import { getAchievements } from 'actions/achievements';

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

  constructor() {
    super();
    this.state = { collapsed: { 'posts': true } };
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

  collapse = (div) => {
    var collapsed = this.state.collapsed;
    collapsed[div] = !collapsed[div];
    this.setState(collapsed);
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
        <div className={`details-header ${this.state.collapsed['posts'] ? 'entypo-down-open' : 'entypo-up-open'}`} onClick={() => this.collapse('posts')}>Post Data</div>
        <div className={`collapse ${this.state.collapsed['posts'] ? '' : 'in'}`}>
          <div className="post-data-wrapper">
            <div className="post-data">
              <div className="post-data-header">Totals</div>
              <div className='post-count'>
                <span className="entypo-trophy">Total Posts: {user.Posts.find(p => p.CountType === "4").Count}</span>
              </div>
              <div className='post-count'>
                <span className="entypo-keyboard">Text Posts: {user.Posts.find(p => p.CountType === "3").Count}</span>
              </div>
              <div className='post-count'>
                <span className="entypo-picture">Image Posts: {user.Posts.find(p => p.CountType === "2").Count}</span>
              </div>
              <div className='post-count'>
                <span className="fontelico-emo-thumbsup">Emoji Posts: {user.Posts.find(p => p.CountType === "0").Count}</span>
              </div>
              <div className='post-count'>
                <span className="entypo-video">Gif Posts: {user.Posts.find(p => p.CountType === "1").Count}</span>
              </div>
            </div>
            {user.ChannelPosts.map((channel) => {
              return (
                <div className="post-data">
                  <div className="post-data-header">{channel.ChannelName}</div>
                  <div className='post-count'>
                    <span className="entypo-trophy">Total Posts: {channel.PostCounts.find(p => p.CountType === "4").Count}</span>
                  </div>
                  <div className='post-count'>
                    <span className="entypo-keyboard">Text Posts: {channel.PostCounts.find(p => p.CountType === "3").Count}</span>
                  </div>
                  <div className='post-count'>
                    <span className="entypo-picture">Image Posts: {channel.PostCounts.find(p => p.CountType === "2").Count}</span>
                  </div>
                  <div className='post-count'>
                    <span className="fontelico-emo-thumbsup">Emoji Posts: {channel.PostCounts.find(p => p.CountType === "0").Count}</span>
                  </div>
                  <div className='post-count'>
                    <span className="entypo-video">Gif Posts: {channel.PostCounts.find(p => p.CountType === "1").Count}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
  renderQuotes() {
    const {
      results: quotes,
    } = this.props.quotes;
    return (
      <div>
        <div className={`details-header ${this.state.collapsed['quotes'] ? 'entypo-down-open' : 'entypo-up-open'}`} onClick={() => this.collapse('quotes')}>Quotes</div>
        <div className={`collapse ${this.state.collapsed['quotes'] ? '' : 'in'}`}>
          {quotes.map((quote) => {
            return (
              <div className='quote-wrapper'><span className='iconicstroke-left-quote' /><div key={quote.QuoteId}>{quote.QuoteText}</div><span className='iconicstroke-right-quote' /></div>
            );
          })}
        </div>
      </div>
    );
  }
  renderAchievements() {
    const {
      results: achievements,
    } = this.props.achievements;
    return (
      <div>
        <div className={`details-header ${this.state.collapsed['ach'] ? 'entypo-down-open' : 'entypo-up-open'}`} onClick={() => this.collapse('ach')}>Achievements</div>
        <div className={`collapse ${this.state.collapsed['ach'] ? '' : 'in'}`}>
          {achievements.map((achievement) => {
            return (
              <div className='quote-wrapper'>
                <div key={achievements.AchievementId}>{achievement.Name}</div>
              </div>
            );
          })}
        </div>
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
