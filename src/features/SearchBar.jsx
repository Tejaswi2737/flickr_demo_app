/* eslint-disable indent */
/* eslint-disable react/jsx-closing-tag-location */
import propTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
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

function SearchBar({ value, setvalue, setsearchImages }) {
    const handleSearch = (e) => {
        if (e.key === 'Enter') {
            setsearchImages(true);
        }
    };

    return (
      <SearchBarStyled
        onChange={(e) => setvalue(e.target.value)}
        onKeyPress={(e) => handleSearch(e)}
        value={value}
      />
    );
}

export default SearchBar;

SearchBar.propTypes = {
    value: propTypes.string.isRequired,
    setvalue: propTypes.func.isRequired,
    setsearchImages: propTypes.func.isRequired,
};
