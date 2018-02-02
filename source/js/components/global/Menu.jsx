import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { routeCodes } from 'constants/routes';

export default class Menu extends Component {
  render() {
    return (
      <div className='menu'>
        <div className='menu-logo'>
          <a href='#' target='_blank' rel='noreferrer noopener' aria-label='Psyduck menu'>
            <img
              src='https://s3-us-west-2.amazonaws.com/psyduck-assets/assets/psyduck.png'
              alt='Psyduck logo'
            />
          </a>
        </div>
        <div className='menu-links'>
          <NavLink
            activeClassName='menu-link--active'
            className='menu-link'
            exact
            to={ routeCodes.DASHBOARD }
          >
            Home
          </NavLink>
          <NavLink
            activeClassName='menu-link--active'
            className='menu-link'
            to={ routeCodes.LEADERBOARD }
          >
            Leaderboard
          </NavLink>
          <NavLink
            activeClassName='menu-link--active'
            className='menu-link'
            to={ routeCodes.BOT_COMMANDS }
          >
            Bot Commands
          </NavLink>
          <NavLink
            activeClassName='menu-link--active'
            className='menu-link'
            to={ routeCodes.CHANGELOG }
          >
            Changelog
          </NavLink>
        </div>
      </div>
    );
  }
}
