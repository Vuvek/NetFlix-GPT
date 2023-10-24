import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    data : null,
}



const UserSlice = createSlice({
    name : 'AuthenticationSlice',
    initialState,
    reducers : {
        addUser : (state,action) => {
            state.data = action.payload
        },
        removeUser : (state, action) => {
            state.data = null
        }
    }
})

export const userActions = UserSlice.actions;
export default UserSlice.reducer;
