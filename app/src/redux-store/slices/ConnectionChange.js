import { createSlice } from "@reduxjs/toolkit";


export const ConnectionChange = createSlice({

    name: 'connectionChange',
    initialState:{
        value: null
    },

    reducers:{
        condiscon: (postInfo,action) => {
            postInfo.value = action.payload;
        }
    }

});

export const {condiscon} = ConnectionChange.actions;
export default ConnectionChange.reducer;