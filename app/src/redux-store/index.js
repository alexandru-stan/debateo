import { configureStore } from "@reduxjs/toolkit";
import StatusReducer from './slices/StatusSlice';
import CommunityIdReducer from "./slices/CommunityIdSlice";
import CommentPost from "./slices/CommentPost";
import SelectedChat from "./slices/SelectedChatSlice";
import IncomingMessage from "./slices/IncomingMessage";
import UnreadMessages from "./slices/UnreadMessages";
import LateralMenuVisibility from "./slices/LateralMenuVisibility";
import RecentCommunityTrigger from "./slices/RecentCommunityTrigger";
import PopUp from "./slices/PopUp";

export default configureStore({
    reducer: {
        status : StatusReducer,
        cid : CommunityIdReducer,
        commentPost: CommentPost,
        selectedChat: SelectedChat,
        incomingMessage: IncomingMessage,
        unreadMessages: UnreadMessages,
        lateralMenuVisibilty: LateralMenuVisibility,
        recentCommunityTrigger: RecentCommunityTrigger,
        popUp: PopUp
    }
})

