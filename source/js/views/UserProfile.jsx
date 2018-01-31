import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { routeCodes } from 'constants/routes';

import { getUser } from 'actions/users';

@connect(state => ({
  error: state.users.get('error'),
  loading: state.users.get('loading'),
  user: state.users.get('user'),
}))
export default class UserProfile extends Component {
  static propTypes = {
    error: PropTypes.string,
    loading: PropTypes.bool,
    users: PropTypes.object,
    params: PropTypes.object,
    // from react-redux connect
    dispatch: PropTypes.func,
  }

  constructor() {
    super();
    this.state = { collapsed: { 'posts': true, 'ach': false, 'badges': false } };
  }

  componentWillMount() {
    const {
      dispatch,
      user,
      match: { params },
    } = this.props;
    if (!user) {
      dispatch(getUser(params.userId));
    } else if (user.results.UserId !== params.userId) {
      dispatch(getUser(params.userId));
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
        <div className={`details-header ${this.state.collapsed['ach'] ? 'entypo-down-open' : 'entypo-up-open'}`} onClick={() => this.collapse('ach')}>Achievements</div>
        <div className={`collapse ${this.state.collapsed['ach'] ? '' : 'in'}`}>
        sss
        </div>
      </div>
    );
  }

  renderAchievements() {
    const {
      achievements,
    } = this.props;

    return achievements.results.map(achievement => {
      return (
        <div key={achievement.AchievementId}>
          {achievement.Name}
        </div>
      );
    });
  }

  render() {
    const {
      loading,
      error,
      user,
    } = this.props;

    return (
      <div>
        {/*<NavLink
            activeClassName='menu-link--active'
            className='menu-link'
            to={ routeCodes.LEADERBOARD }
          >
            {'<-'}
        </NavLink>*/}
        <h1>User Details</h1>
        {loading && <div>Loading info...</div>}
        {error && error.toString()}
        <div className='user-details'>
          {user && this.renderUser()}
        </div>
        <div className='ach-list'>

        </div>
      </div>
    );
  }
}
