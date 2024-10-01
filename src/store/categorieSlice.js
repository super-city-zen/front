import { createSlice } from "@reduxjs/toolkit";


export const categorieSlice = createSlice({
    name: 'categorie',
    initialState: {
        categories: []
    },
    reducers: {
        addCategories: (state) => {
            state.categories = [];
            const newCategories = state.categories;
            for (let index = 1; index <= 5; index++) {
                const title = 'categorie '+index;
                const message = `message from` + title;
                const categorie = {
                    index,
                    title,
                    message
                }
                newCategories.push(categorie)
            }
            state.categories = newCategories;
        }
    }
});
export const {addCategories} = categorieSlice.actions;
export const selectCategories = (state) => state.categorie.categories

export default categorieSlice.reducer;