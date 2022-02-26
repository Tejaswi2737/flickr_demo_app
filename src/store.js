/* eslint-disable import/prefer-default-export */
import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './searchSlice';

const store = configureStore({
    reducer: {
        search: searchReducer,
    },
});

export default store;
