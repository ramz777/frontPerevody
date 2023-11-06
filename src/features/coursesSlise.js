import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    courses: [],
    currentCourse: 0,
    loading: false,
    error: false
};


export const fetchCourses = createAsyncThunk('courses/fetch', async (data, thunkAPI) => {
    const res = await fetch(`http://localhost:3003/course`);
    const courses = await res.json();
    return courses;
});




const coursesSlice = createSlice({
    name: 'courses',
    initialState,
    reducers: {
        saveCurrentCourse: (state, action) => {
            state.currentCourse = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase( fetchCourses.fulfilled,(state, action) => {
            state.courses = action.payload;
            state.currentCourse = action.payload[0]._id;
            state.loading = false;
            state.error = false;
        })
        .addCase( fetchCourses.rejected,(state) => {
            state.loading = false;
            state.error = true;
        })
        .addCase( fetchCourses.pending,(state) => {
            state.loading = true;
            state.error = false;
        })
    }
});

export const {saveCurrentCourse} = coursesSlice.actions;
export default coursesSlice.reducer;