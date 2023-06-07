import { createSlice } from "@reduxjs/toolkit";

export const CommunityIdSlice = createSlice({
    name: 'cid',
    initialState: {
        value: 0
    },
    
    reducers: {
            change: (state,action) => {
                state.value = action.payload;

            }
    }

})

export  const {change: changeId} = CommunityIdSlice.actions;
export default CommunityIdSlice.reducer;