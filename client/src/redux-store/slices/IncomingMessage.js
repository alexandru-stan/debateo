import { createSlice } from "@reduxjs/toolkit";

export const IncomingMessage = createSlice({
    name: 'message',
    initialState: {
        value: null
    },
    
    reducers: {
            update: (state,action) => {
                state.value = action.payload;

            }
    }

})

export  const {update: update} = IncomingMessage.actions;
export default IncomingMessage.reducer;