/* eslint-disable indent */
/* eslint-disable react/jsx-closing-tag-location */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { MdOutlineImageSearch } from 'react-icons/md';
import {
    getImagesListAsync,
    setSearchWord,
    showsearchValue,
} from '../../searchSlice';
import {
    COLORS, FONT_SIZES, FONT_WEIGHTS, LINE_HEIGHTS,
} from '../../theme';
import useDeviceType from '../../useDeviceType';

const WIDTH = {
    LARGE_DESKTOP: '40%',
    DESKTOP: '40%',
    TABLET: '60%',
    MOBILE: '60%',
};
const StyledSearchBar = styled.div(() => ({
    display: 'inline-flex',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
}));

const StyledInput = styled.input(() => ({
    display: 'block',
    width: WIDTH[useDeviceType()],
    justifyContent: 'center',
    alignItems: 'center',
    height: '30px',
    borderRadius: '40px',
    border: `2px solid ${COLORS.light}`,
    padding: '10px 40px',
    marginBottom: '20px',
    fontSize: FONT_SIZES.mediumMobile,
    fontWeight: FONT_WEIGHTS.bold,
    lineHeight: LINE_HEIGHTS.medium,
    ':active': {
        border: 'none',
    },
    overflow: 'visible',
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
      <StyledSearchBar>
        <StyledInput
          onChange={(e) => handleWordChange(e.target.value)}
          onKeyPress={(e) => handleSearch(e)}
          value={searchTag}
        />
        <MdOutlineImageSearch
          size={30}
          fill={COLORS.darkest}
          onClick={() => dispatch(getImagesListAsync(searchTag))}
          style={{ cursor: 'pointer', margin: '10px 0 0px -50px' }}
        />
      </StyledSearchBar>

    );
}

export default React.memo(SearchBar);
