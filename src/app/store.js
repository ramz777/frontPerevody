import { configureStore } from "@reduxjs/toolkit";
import plansSlice from "../features/plansSlise";
import coursesSlice from "../features/coursesSlise";
import directionsSlice from "../features/directionsSlise";
import tablesSlice from "../features/tablesSlise";

export const store = configureStore({
    reducer: {
        plansSlice,
        coursesSlice,
        directionsSlice,
        tablesSlice
    }
})