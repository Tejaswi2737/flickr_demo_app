/* eslint-disable no-use-before-define */
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    searchValue: window.sessionStorage.getItem('searchTag') || 'Himalayas',
    images: [],
    searchError: '',
    isFetchingImages: false,
};

export const CORS_URL = 'https://getByCors.herokuapp.com/';
export const BASE_URL = 'https://api.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=true&';

export const searchSlice = createSlice({
    name: 'searchImages',
    initialState,
    reducers: {
        setSearchWord: (state, action) => {
            state.searchValue = action.payload;
        },
        searchFlickrImages: (state, action) => {
            window.sessionStorage.setItem('searchTag', action.payload.tag);
            state.isFetchingImages = false;
            state.images = action.payload.images;
        },
        clearImages: (state, action) => {
            state.searchValue = action.payload;
            state.images = [];
        },
        setLoading: (state, action) => {
            state.isFetchingImages = action.payload;
        },
        setError: (state, action) => {
            state.isFetchingImages = false;
            state.searchError = action.payload;
        },
    },
});

export const getImagesListAsync = (searchValue) => async (dispatch) => {
    try {
        dispatch(setLoading(true));
        dispatch(clearImages(searchValue));
        const response = await axios.get(`${CORS_URL + BASE_URL}&tags=${searchValue}`);
        dispatch(searchFlickrImages({ images: response.data, tag: searchValue }));
    } catch (err) {
        dispatch(setError(err));
    }
};
// Action creators are generated for each case reducer function
export const {
    searchFlickrImages,
    clearImages,
    setSearchWord,
    setLoading,
    setError,
} = searchSlice.actions;

export const showimages = (state) => state.search?.images;
export const showsearchValue = (state) => state.search?.searchValue;
export const isFetchingImages = (state) => state.search?.isFetchingImages;
export const searchError = (state) => state.search?.searchError;

export default searchSlice.reducer;
