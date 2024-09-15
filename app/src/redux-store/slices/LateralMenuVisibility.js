import { createSlice } from "@reduxjs/toolkit";

export const LateralMenuVisibility = createSlice({
    name: 'lateralMenuVisibility',
    initialState: {
        value: {
            left:'block',
            right:'flex'
        }
    },
    
    reducers: {
            setLeftVisibility: (state,action) => {
                state.value.left = action.payload

            },

            setRightVisibility: (state,action) => {

                state.value.right = action.payload

            }
    }

})

export  const {setLeftVisibility,setRightVisibility} = LateralMenuVisibility.actions;
export default LateralMenuVisibility.reducer;