import { createSlice } from "@reduxjs/toolkit";

export const UnreadMessages = createSlice({
    name: 'unreadMessages',
    initialState: {
        value: null
    },
    
    reducers: {
        updateUnreadMessages: (state,action) => {
                state.value = action.payload;

            }
    }

})

export  const {updateUnreadMessages} = UnreadMessages.actions;
export default UnreadMessages.reducer;