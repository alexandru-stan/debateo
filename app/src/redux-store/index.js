import { configureStore } from "@reduxjs/toolkit";
import StatusReducer from './slices/StatusSlice';
import CommunityIdReducer from "./slices/CommunityIdSlice";
import CommentPost from "./slices/CommentPost";
export default configureStore({
    reducer: {
        status : StatusReducer,
        cid : CommunityIdReducer,
        commentPost: CommentPost
    }
})

