import { configureStore } from "@reduxjs/toolkit";

import todoReducer from '../store/todoSlice'
import { persistStore, persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';


// redux-logger
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['todos']

}


const rootReducer = combineReducers({
    todos: todoReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)


const store = configureStore({
    reducer: persistedReducer
})


export const persistor = persistStore(store)

export default store