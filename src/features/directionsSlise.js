import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    directions: [],
    currentPlan: null,
    loading: false,
    error: false
};


export const fetchDirections = createAsyncThunk('directions/fetch', async (data, thunkAPI) => {
    const res = await fetch(`http://localhost:3003/direction`);
    const directions = await res.json();
    return directions;
});




const directionsSlice = createSlice({
    name: 'directions',
    initialState,
    reducers: {
        saveCurrentPlan: (state, action) => {
            state.currentPlan = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchDirections.fulfilled, (state, action) => {
                state.directions = action.payload;
                state.currentPlan = action.payload[0]._id;
                state.loading = false;
                state.error = false;
            })
            .addCase(fetchDirections.rejected, (state) => {
                state.loading = false;
                state.error = true;
            })
            .addCase(fetchDirections.pending, (state) => {
                state.loading = true;
                state.error = false;
            })
    }
});

export const { saveCurrentPlan } = directionsSlice.actions;
export default directionsSlice.reducer;
