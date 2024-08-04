import { createSlice } from "@reduxjs/toolkit";

export const LateralMenuVisibility = createSlice({
    name: 'lateralMenuVisibility',
    initialState: {
        value: true
    },
    
    reducers: {
            update: (state,action) => {
                state.value = action.payload;

            }
    }

})

export  const {update: update} = LateralMenuVisibility.actions;
export default LateralMenuVisibility.reducer;