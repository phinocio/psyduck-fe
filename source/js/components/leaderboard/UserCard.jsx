import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class UserCard extends Component {
  static propTypes = {
    user: PropTypes.object,
    rank: PropTypes.number,
  }

  componentWillMount() {

  }

  renderUser() {
    const {
      user,
      rank,
    } = this.props;
    return (
      <div className='user-card'>
        <div className='user-plate'>
          <div className='user-rank'>#{rank}</div>
          <div className='user-details'>
            <img className='avatar' src={user.AvatarUrl || 'https://cdn.discordapp.com/embed/avatars/0.png'} />
            <NavLink
              className='username'
              to={`users/${user.UserId}`}
            >
              {user.UserName || "Ghost in a Shell"}
            </NavLink>
          </div>
        </div>
        <div className="post-data">
          <div className='post-count'>
            <span className="entypo-trophy">{user.Posts.find(p => p.CountType === "4").Count}</span>
          </div>
          <div className='post-count'>
            <span className="entypo-keyboard">{user.Posts.find(p => p.CountType === "3").Count}</span>
          </div>
          <div className='post-count'>
            <span className="entypo-picture">{user.Posts.find(p => p.CountType === "2").Count}</span>
          </div>
          <div className='post-count'>
            <span className="fontelico-emo-thumbsup">{user.Posts.find(p => p.CountType === "0").Count}</span>
          </div>
          <div className='post-count'>
            <span className="entypo-video">{user.Posts.find(p => p.CountType === "1").Count}</span>
          </div>
        </div>
      </div>
    );
  }

  render() {
    const {
      user,
    } = this.props;

    return (
      <div>
        {user && this.renderUser()}
      </div>
    );
  }
}
