import { createSlice } from "@reduxjs/toolkit";

export const LateralRender = createSlice({
    name: "LateralRender",
    initialState: {
        value: localStorage.getItem('userData') != null ? true : false 
    },

    reducers: {
        update: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { update: update } = LateralRender.actions;
export default LateralRender.reducer;
