/* eslint-disable indent */
/* eslint-disable react/jsx-closing-tag-location */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import {
    getImagesListAsync,
    setSearchWord,
    showsearchValue,
} from '../searchSlice';
import {
    COLORS, FONT_SIZES, FONT_WEIGHTS, LINE_HEIGHTS,
} from '../theme';
import useDeviceType from '../useDeviceType';

const WIDTH = {
    LARGE_DESKTOP: '40%',
    DESKTOP: '40%',
    TABLET: '60%',
    MOBILE: '80%',
};

const SearchBarStyled = styled.input(() => ({
    display: 'block',
    width: WIDTH[useDeviceType()],
    justifyContent: 'center',
    alignItems: 'center',
    height: '30px',
    borderRadius: '40px',
    border: `2px solid ${COLORS.light}`,
    padding: '10px 40px',
    margin: 'auto',
    marginBottom: '20px',
    fontSize: FONT_SIZES.mediumMobile,
    fontWeight: FONT_WEIGHTS.bold,
    lineHeight: LINE_HEIGHTS.medium,
    ':active': {
        border: 'none',
    },
}));

function SearchBar() {
    const searchTag = (useSelector(showsearchValue));
    const dispatch = useDispatch();

    const handleWordChange = (value) => {
        dispatch(setSearchWord(value));
    };

    const handleSearch = (e) => {
        if (e.key === 'Enter') {
            dispatch(getImagesListAsync(e.target.value));
        }
    };

    return (
      <SearchBarStyled
        onChange={(e) => handleWordChange(e.target.value)}
        onKeyPress={(e) => handleSearch(e)}
        value={searchTag}
      />
    );
}

export default React.memo(SearchBar);
