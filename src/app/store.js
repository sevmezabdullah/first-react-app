import { configureStore } from "@reduxjs/toolkit";

import cartReducer from '../store/cartSlice'
import productReducer from '../store/productSlice'
import { persistStore, persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';


// redux-logger
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart'],
    blacklist: ["products"]

}


const rootReducer = combineReducers({
    cart: cartReducer,
    products: productReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)


const store = configureStore({
    reducer: persistedReducer
})


export const persistor = persistStore(store)

export default store