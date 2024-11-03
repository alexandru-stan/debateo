import { createSlice } from "@reduxjs/toolkit";

export const SessionToken = createSlice({
    name: "SessionToken",
    initialState: {
        value:null
    },

    reducers: {
        update: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { update: update } = SessionToken.actions;
export default SessionToken.reducer;
