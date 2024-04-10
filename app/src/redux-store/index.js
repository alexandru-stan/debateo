import { configureStore } from "@reduxjs/toolkit";
import StatusReducer from './slices/StatusSlice';
import CommunityIdReducer from "./slices/CommunityIdSlice";
import CommentPost from "./slices/CommentPost";
import SelectedChat from "./slices/SelectedChatSlice";
export default configureStore({
    reducer: {
        status : StatusReducer,
        cid : CommunityIdReducer,
        commentPost: CommentPost,
        selectedChat: SelectedChat
    }
})

