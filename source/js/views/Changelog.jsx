import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

@connect(state => ({
}))
export default class Changelog extends Component {
  static propTypes = {
    error: PropTypes.string,
    loading: PropTypes.bool,
  }

  render() {
    return (
      <div className='changelog'>
        I am Changes
      </div>
    );
  }
}
