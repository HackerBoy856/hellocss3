import { combineReducers } from 'redux';
import userReducer from './userReducer';

// 通过combineReducers把多个reducer进行合并
const index = combineReducers({
    userReducer,
})

export default index;
