import { createSlice, configureStore } from "@reduxjs/toolkit"

const intitalState = {
    watchList: JSON.parse(localStorage.getItem("watchList")) || [],
    history: JSON.parse(localStorage.getItem("history")) || []
}

const actionSlice = createSlice({
    name: "Actions",
    initialState: intitalState,
    reducers: {
        addHistory(state, action) {
            const { id } = action.payload;
            const existingIndex = state.history.findIndex(item => item.id === id);

            if (existingIndex !== -1) {
                state.history.splice(existingIndex, 1);
            }
            state.history.push(action.payload);

            return localStorage.setItem("history", JSON.stringify(state.history));

        },
        clearHistory(state) {
            state.history = [];
            localStorage.removeItem("history");
        },
        addWatchList(state, action) {
            const { id } = action.payload;
            const existingIndex = state.watchList.findIndex(item => item.id === id);

            if (existingIndex !== -1) {
                state.watchList.splice(existingIndex, 1);
            }
            state.watchList.push(action.payload);

            return localStorage.setItem("watchList", JSON.stringify(state.watchList));
        },
        clearWatchList(state) {
            state.watchList = []
            localStorage.removeItem("watchList")
        }
    }
})

export const store = configureStore({
    reducer: actionSlice.reducer
})

export const { addHistory, clearHistory, addWatchList, clearWatchList } = actionSlice.actions