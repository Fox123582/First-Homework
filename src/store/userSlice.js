import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:'userSlice',
    initialState:[],
    reducers:{
        setPerson: (state, action)=>{return action.payload},
    }
})

export default userSlice.reducer
export const {setPerson} = userSlice.actions