import { createSlice } from "@reduxjs/toolkit";

export const RecentCommunityTrigger = createSlice({
    name: 'rct',
    initialState: {
        value: true
    },
    
    reducers: {
            update: (state,action) => {
                state.value = action.payload;

            }
    }

})

export  const {update: update} = RecentCommunityTrigger.actions;
export default RecentCommunityTrigger.reducer;