import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

@connect(state => ({
    user: state.app.get('user'),
}))
export default class UserProfile extends Component {
  static propTypes = {
    error: PropTypes.string,
    loading: PropTypes.bool,
  }

  render() {
    return (
      <div className='user-profile'>
      </div>
    );
  }
}
