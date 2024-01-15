import { createSlice } from "@reduxjs/toolkit";


export const CommentPost = createSlice({

    name: 'postInfo',
    initialState:{
        value: null
    },

    reducers:{
        assign: (postInfo,action) => {
            postInfo.value = action.payload;
        }
    }

});

export const {assign} = CommentPost.actions;
export default CommentPost.reducer;