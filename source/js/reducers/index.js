import { combineReducers } from 'redux';

import app from './app';
import users from './users';
import quotes from './quotes';
import achievements from './achievements';

export default combineReducers({
    app,
    users,
    quotes,
    achievements,
});
