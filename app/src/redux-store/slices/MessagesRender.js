import { createSlice } from "@reduxjs/toolkit";

export const MessagesRender = createSlice({
    name: 'messagesRender',
    initialState: {
        value: false
    },
    
    reducers: {
            update: (state,action) => {
                state.value = action.payload;

            }
    }

})

export  const {update: update} = MessagesRender.actions;
export default MessagesRender.reducer;