import {combineReducers, createStore} from 'redux';
import GioHangReducer from './GioHangReducer';

const rootReducer = combineReducers({
    GioHangReducer
})

export const store = createStore(rootReducer);