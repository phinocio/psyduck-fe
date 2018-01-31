export const GET_QUOTES_START = 'GET_QUOTES_START';
export const GET_QUOTES_ERROR = 'GET_QUOTES_ERROR';
export const GET_QUOTES_SUCCESS = 'GET_QUOTES_SUCCESS';

export function getQuotes(userId) {
  return {
    type: GET_QUOTES_START,
    userId: userId
  };
}