import auth from './auth';
import notes from './notes';

// eslint-disable-next-line import/imports-first
import { combineReducers } from 'redux';
// import { persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'

// const persistConfig = {
//     key: 'root',
//     storage,
//     whitelist: ['auth']
// }
const allReducers = combineReducers({ auth, notes });

// export default persistReducer(persistConfig, allReducers)

export default allReducers;
