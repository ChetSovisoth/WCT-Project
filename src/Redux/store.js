import rootReducer from './rootReducer'
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { thunk } from 'redux-thunk';
import { createStore, applyMiddleware } from "redux"

const persistConfig = {
    key: "redux-persist-key",
    storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, applyMiddleware(thunk));
const persistor = persistStore(store);
export default store;
export { persistor };