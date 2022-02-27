/* eslint-disable react/jsx-indent */
import propTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const StyledImage = styled.img`
    :hover {
        transform: scale(0.9); 
        transition: 0.5s
    }
    width: 100%;
    min-height: 350px;
    max-height: 350px;
    border-radius: 10px;
`;

function Image({ imgSrc, externalImageLink }) {
    return (
        <a href={externalImageLink} alt="" target="_blank" rel="noreferrer">
            <StyledImage src={imgSrc} alt="imgUrl" />
        </a>
    );
}

export default React.memo(Image);

Image.propTypes = {
    imgSrc: propTypes.string.isRequired,
    externalImageLink: propTypes.string.isRequired,
};
