import { createSlice } from "@reduxjs/toolkit";


export const voteSlice = createSlice({
    name: 'vote',
    initialState: {
        votes: []
    },
    reducers: {
        addVote: (state, action) => {
            state.votes = [];
            const newVotes = state.votes;
            for (let index = 1; index < 3; index++) {
                const title = 'vote '+index;
                const message = `message from` + title;
                const vote = {
                    index,
                    title,
                    message
                }
                newVotes.push(vote)
            }
            state.votes = newVotes;
        }
    }
});
export const {addVote} = voteSlice.actions;
export const selectVotes = (state) => state.vote.votes

export default voteSlice.reducer;