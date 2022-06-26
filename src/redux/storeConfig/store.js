// ** Redux, Thunk & Root Reducer Imports
import thunk from 'redux-thunk'
import createDebounce from 'redux-debounced'
import rootReducer from '../reducers/rootReducer'
import { createStore, applyMiddleware, compose } from 'redux'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { persistStore, persistReducer } from 'redux-persist'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth', 'chat', 'notifi']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)


// ** init middleware
const middleware = [thunk, createDebounce()]

// ** Dev Tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// ** Create store
const store = createStore(persistedReducer, {}, composeEnhancers(applyMiddleware(...middleware)))

const persistor = persistStore(store)

export { store, persistor }
