import auth from './auth'
import pass from './pass'

import { combineReducers } from 'redux'
// import { persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'

// const persistConfig = {
//     key: 'root',
//     storage,
//     whitelist: ['auth']
// }
const allReducers = combineReducers( { auth, pass })

// export default persistReducer(persistConfig, allReducers)

export default allReducers