import { createStore, applyMiddleware } from "redux";
import reducer from "./Reducers/Reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web


const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, reducer)//store from reducer to persist

const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware()))// store from 
// persist to redux
let persistor = persistStore(store)// store persite

export { store, persistor }