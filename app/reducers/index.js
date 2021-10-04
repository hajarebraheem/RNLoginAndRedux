import auth from './auth'
import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth']
}
const allReducers = combineReducers({
    auth: auth
})

export default persistReducer(persistConfig, allReducers)