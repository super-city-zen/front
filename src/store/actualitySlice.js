import { createSlice } from "@reduxjs/toolkit";


export const actualitySlice = createSlice({
    name: 'actuality',
    initialState: {
        news: []
    },
    reducers: {
        addNews: (state) => {
            state.news = [];
            const newNews = state.news;
            for (let index = 1; index < 3; index++) {
                const title = 'actuality '+index;
                const message = `message from` + title;
                const actuality = {
                    index,
                    title,
                    message
                }
                newNews.push(actuality)
            }
            state.news = newNews;
        }
    }
});
export const {addNews} = actualitySlice.actions;
export const selectNews = (state) => state.actuality.news

export default actualitySlice.reducer;