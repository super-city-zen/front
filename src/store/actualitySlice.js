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
                let title = 'actuality '+index;
                let message = `message from` + title;

                if(index === 2){
                    title = "Seine-Saint-Denis : un ancien membre du “gang des barbares” condamné à un an de prison pour vol avec violence";
                    message = "Jean-Christophe Soumbou, ancien membre du “gang des barbares”, a été condamné jeudi par le tribunal correctionnel de Bobigny (Seine-Saint-Denis) à deux ans de prison, dont un avec sursis pour vol avec violence en réunion, commis contre un jeune homme en 2023."
                }

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