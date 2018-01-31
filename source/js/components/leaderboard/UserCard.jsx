import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class UserCard extends Component {
  static propTypes = {
    user: PropTypes.object,
  }

  componentWillMount() {

  }

  renderUser() {
    const {
      user,
    } = this.props;
      return (
        <div className='user-card'>
        <img className='avatar' src={user.AvatarUrl || 'https://cdn.discordapp.com/embed/avatars/0.png'} />
        <NavLink
            className='username'
            to={`users/${user.UserId}`}            
          >
            {user.UserName || "Ghost in a Shell"}
          </NavLink>
          <ul className="data">
    <li>
      <span className="entypo-trophy">Total Posts: { user.Posts.find(p => p.CountType === "4").Count }</span>
    </li>
    <li>
      <span className="entypo-keyboard">Text Posts: { user.Posts.find(p => p.CountType === "3").Count }</span>
    </li>
    <li>
      <span className="entypo-picture">Image Posts: { user.Posts.find(p => p.CountType === "2").Count }</span>
    </li>
    <li>
      <span className="fontelico-emo-thumbsup">Emoji Posts: { user.Posts.find(p => p.CountType === "0").Count }</span>
    </li>
    <li>
      <span className="entypo-video">Gif Posts: { user.Posts.find(p => p.CountType === "1").Count }</span>
    </li>
 </ul>
        </div>
      );
  }

  render() {
    const {
      user,
    } = this.props;

    return (
        <div>
          { user && this.renderUser() }
        </div>
    );
  }
}
