import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';
import {findTuitsThunk, deleteTuitThunk, createTuitThunk} from "../../services/tuits-thunks";

const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "image": "nasa-logo.png",
};

const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
}

const initialState = {
    tuits: [],
    loading: false
}

const tuitsSlice = createSlice({
    name: 'tuits',
    // initialState: tuits,
    // reducers: {
    //     deleteTuit(state, action) {
    //         const index = state
    //             .findIndex(tuit =>
    //                 tuit._id === action.payload);
    //         state.splice(index, 1);
    //     },
    //     createTuit(state, action) {
    //         state.unshift({
    //             ...action.payload,
    //             ...templateTuit,
    //             _id: (new Date()).getTime(),
    //         })
    //     },
    //     updateTuitStats(state, action) {
    //         const tuit = state.find(tuit => tuit._id === action.payload);
    //         tuit.liked = !tuit.liked;
    //         tuit.likes += tuit.liked ? 1 : -1;
    //     }
    // }
    initialState,
    extraReducers: {
        [findTuitsThunk.pending]:
            (state) => {
                state.loading = true
                state.tuits = []
            },
        [findTuitsThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.tuits = payload
            },
        [findTuitsThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error
            },
        [deleteTuitThunk.fulfilled] :
            (state, { payload }) => {
                state.loading = false
                state.tuits = state.tuits
                    .filter(t => t._id !== payload)
            },
        [createTuitThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.tuits.push(payload)
            },

    },
});
export const {createTuit, deleteTuit, updateTuitStats} = tuitsSlice.actions;
export default tuitsSlice.reducer;