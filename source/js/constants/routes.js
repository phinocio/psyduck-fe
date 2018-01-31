export const publicPath = '/';

export const routeCodes = {
  DASHBOARD: publicPath,
  LEADERBOARD: `${ publicPath }users`,
  USER_PROFILE: `${ publicPath }users/:userId`,
};
