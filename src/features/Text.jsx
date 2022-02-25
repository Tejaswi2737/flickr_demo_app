/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
import propTypes, { oneOf } from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import {
    COLORS,
    FONT_SIZES,
    FONT_WEIGHTS,
    LINE_HEIGHTS,
} from '../theme';

const StyledText = styled.div(({
    weight, size, height, color,
}) => ({
    fontWeight: FONT_WEIGHTS[weight],
    fontSize: FONT_SIZES[size],
    lineHeight: LINE_HEIGHTS[height],
    color: COLORS[color],
}));

function Text(props) {
    const {
        content,
        weight,
        size,
        height,
        color,
    } = props;

    return (
        <StyledText
            weight={weight}
            size={size}
            height={height}
            color={color}
        >
            {content}
        </StyledText>
    );
}

export default React.memo(Text);

Text.propTypes = {
    content: propTypes.string.isRequired,
    weight: oneOf(Object.keys(FONT_WEIGHTS)),
    size: oneOf(Object.keys(FONT_SIZES)),
    height: oneOf(Object.keys(LINE_HEIGHTS)),
    color: oneOf(Object.keys(COLORS)),
};

Text.defaultProps = {
    weight: 'bold',
    size: 'medium',
    height: 'medium',
    color: 'light',
};
