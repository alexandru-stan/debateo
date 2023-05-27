import { configureStore } from "@reduxjs/toolkit";
import StatusReducer from './slices/StatusSlice';

export default configureStore({
    reducer: {
        status : StatusReducer
    }
})

