import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

@connect(state => ({
  counter: state.users.get('counter'),
}))
export default class Dashboard extends Component {
  static propTypes = {
    error: PropTypes.string,
    loading: PropTypes.bool,
  }

  render() {
    return (
      <div className='dashboard'>
        I am Groot
      </div>
    );
  }
}
