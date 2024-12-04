import { configureStore } from "@reduxjs/toolkit";

import authSlice from "../store/authSlice"

import protectedSlice from "../store/protectedSlice"

const store = configureStore({
    reducer: {
        auth: authSlice,
        protected: protectedSlice
    },

})



export default store