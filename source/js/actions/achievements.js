export const GET_ACHIEVEMENTS_START = 'GET_ACHIEVEMENTS_START';
export const GET_ACHIEVEMENTS_ERROR = 'GET_ACHIEVEMENTS_ERROR';
export const GET_ACHIEVEMENTS_SUCCESS = 'GET_ACHIEVEMENTS_SUCCESS';

export function getAchievements(userId) {
  return {
    type: GET_ACHIEVEMENTS_START,
    userId: userId
  };
}