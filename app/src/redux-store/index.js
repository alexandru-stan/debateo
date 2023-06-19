import { configureStore } from "@reduxjs/toolkit";
import StatusReducer from './slices/StatusSlice';
import CommunityIdReducer from "./slices/CommunityIdSlice";
export default configureStore({
    reducer: {
        status : StatusReducer,
        cid : CommunityIdReducer 
    }
})

