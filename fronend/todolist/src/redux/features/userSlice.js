import { createSlice } from '@reduxjs/toolkit'

const initialState ={
    myUsers: []
}
   

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser: (state,data) => {
             state.myUsers  = [...state.myUsers,data.payload]
            
        },
    },
})

// Action creators are generated for each case reducer function
export const { addUser } = userSlice.actions

export default userSlice.reducer