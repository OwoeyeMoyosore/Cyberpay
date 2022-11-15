import { configureStore } from "@reduxjs/toolkit";
import layoutSlice from "./slice/layoutSlice";
import modalSlice from "./slice/modalSlice";

const store = configureStore({
    reducer:{
        layout: layoutSlice,
        modal : modalSlice,
    }
})
export default store