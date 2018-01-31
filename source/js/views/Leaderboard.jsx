import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

@connect(state => ({

}))

export default class Leaderboard extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
  }

  render() {
    return (
      <div className='leaderboard'>
      </div>
    );
  }
}
