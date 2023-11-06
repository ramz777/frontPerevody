import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    iP: [],
    pZ: [],
    lR: []
};




const tablesSlice = createSlice({
    name: 'tables',
    initialState,
    reducers: {
        saveCurrentTables: (state, action) => {
            if (action.payload.type == 'перезачеты'){
                state.pZ.push(action.payload.plan)
                state.iP.filter(item => item != action.payload.plan)
                state.lR.filter(item => item != action.payload.plan)
            } else if (action.payload.type == 'инд. план'){
                state.iP.push(action.payload.plan)
                state.pZ.filter(item => item != action.payload.plan)
                state.lR.filter(item => item != action.payload.plan)
            } else {
                state.lR.push(action.payload.plan)
                state.iP.push(action.payload.plan)
                state.pZ.filter(item => item != action.payload.plan)
                //state.iP.filter(item => item != action.payload.plan)
            }
        }
    },
  
});

export const {saveCurrentTables} = tablesSlice.actions;
export default tablesSlice.reducer;