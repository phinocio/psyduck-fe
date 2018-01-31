import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUsers } from 'actions/users';
import UserCard from 'components/leaderboard/UserCard';

@connect(state => ({
  error: state.users.get('error'),
  loading: state.users.get('loading'),
  users: state.users.get('users'),
}))
export default class Leaderboard extends Component {
  static propTypes = {
    error: PropTypes.string,
    loading: PropTypes.bool,
    users: PropTypes.object,
    // from react-redux connect
    dispatch: PropTypes.func,
  }

  componentWillMount() {
    const {
      dispatch,
      users,
    } = this.props;

    if (!users) {
      dispatch(getUsers());
    }
  }

  renderUsers() {
    const {
      users,
    } = this.props;

    var sortedUsers = users.results.sort((u1, u2) =>  parseInt(u2.Posts.find(p => p.CountType === "4").Count) - parseInt(u1.Posts.find(p => p.CountType === "4").Count));

    return sortedUsers.map((user, index) => {
      return (
        <UserCard key={user.UserId} rank={index + 1} user={user} />
      );
    });
  }

  render() {
    const {
      loading,
      error,
      users,
    } = this.props;

    return (
      <div className='users'>
        <h1>Ranking</h1>
        { loading && <div>Loading users...</div> }
        { error && error.toString() }
        <div className='user-list'>
          { users && this.renderUsers() }
        </div>
      </div>
    );
  }
}
