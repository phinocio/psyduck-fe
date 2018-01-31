export const GET_USERS_START = 'GET_USERS_START';
export const GET_USERS_ERROR = 'GET_USERS_ERROR';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';

export const GET_USER_START = 'GET_USER_START';
export const GET_USER_ERROR = 'GET_USER_ERROR';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';

export function getUsers() {
  return {
    type: GET_USERS_START,
  };
}

export function getUser(userId) {
  return {
    type: GET_USER_START,
    userId: userId
  };
}