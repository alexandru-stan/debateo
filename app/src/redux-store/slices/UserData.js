import { createSlice } from "@reduxjs/toolkit";

export const UserData = createSlice({
    name: "userdata",
    initialState: {
        value: {
            username: null,
            name: null,
            mail: null,
            birth_date: null,
            profile_image: null,
        },
    },

    reducers: {
        update: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { update: update } = UserData.actions;
export default UserData.reducer;
