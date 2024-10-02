import { configureStore } from "@reduxjs/toolkit";
import authenticationReducer from "./authentificationSlice";
import voteReducer from "./voteSlice";
import actualityReducer from "./actualitySlice";
import categorieReducer from "./categorieSlice";

export const store = configureStore({
    reducer: {
        auth: authenticationReducer,
        vote: voteReducer,
        actuality: actualityReducer,
        categorie: categorieReducer
    }
});
