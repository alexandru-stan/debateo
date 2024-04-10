import { createSlice } from "@reduxjs/toolkit";

export const SelectedChat = createSlice({
    name: 'chat',
    initialState: {
        value: null
    },
    
    reducers: {
            change: (state,action) => {
                state.value = action.payload;

            }
    }

})

export  const {change: change} = SelectedChat.actions;
export default SelectedChat.reducer;