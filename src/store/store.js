import { configureStore } from "@reduxjs/toolkit";
import authenticationReducer from "./authentificationSlice";

export const store = configureStore({
    reducer: {
        auth: authenticationReducer
    }
});
