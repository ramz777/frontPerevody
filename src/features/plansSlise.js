import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    plans: [],
    loading: false,
    error: false
};


export const fetchPlans = createAsyncThunk('plans/fetch', async ({course, plan}, thunkAPI) => {
    const res = await fetch(`http://localhost:3003/plans/${plan}/${course}`);
    const plans = await res.json();
    return plans;
});




const plansSlice = createSlice({
    name: 'plans',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase( fetchPlans.fulfilled,(state, action) => {
            state.plans = action.payload;
            state.loading = false;
            state.error = false;
        })
        .addCase( fetchPlans.rejected,(state) => {
            state.loading = false;
            state.error = true;
        })
        .addCase( fetchPlans.pending,(state) => {
            state.loading = true;
            state.error = false;
        })
    }
});

export default plansSlice.reducer;