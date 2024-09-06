import { createSlice } from "@reduxjs/toolkit";


export const PopUp = createSlice({

    name: 'popUp',
    initialState:{
        value: null
    },

    reducers:{
        assign: (popUp,action) => {
            popUp.value = action.payload;
        }
    }

});

export const {assign} = PopUp.actions;
export default PopUp.reducer;