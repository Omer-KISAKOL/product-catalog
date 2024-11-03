import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
    name: 'filters',
    initialState: {
        filter: {},
        sort: ''
    },
    reducers: {
        setFilter(state, action) {
            const { type, value } = action.payload;
            state.filter[type] = value;
        },
        setSort(state, action) {
            state.sort = action.payload;
        },
    },
});

export const {setFilter, setSort} = filterSlice.actions;
export default filterSlice.reducer;
