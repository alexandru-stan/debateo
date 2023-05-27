import { createSlice } from "@reduxjs/toolkit";

export const StatusSlice = createSlice({
    name: 'status',
    initialState: {
        value: true
    },
    
    reducers: {
            change: (state,action) => {
                state.value = action.payload;

            }
    }

})

export  const {change: changeStatus} = StatusSlice.actions;
export default StatusSlice.reducer;