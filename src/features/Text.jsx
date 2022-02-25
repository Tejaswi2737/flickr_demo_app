import propTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import {
    COLORS, FONT_SIZES, FONT_WEIGHTS, LINE_HEIGHTS,
} from '../theme';

const TextStyled = styled.div(() => ({
    fontWeight: FONT_WEIGHTS.semiBold,
    fontSize: FONT_SIZES.mediumMobile,
    lineHeight: LINE_HEIGHTS.mediumMobile,
    color: COLORS.lightest,
}));

function Text({ content }) {
    return (<TextStyled>{content}</TextStyled>);
}

export default React.memo(Text);

Text.propTypes = {
    content: propTypes.string.isRequired,
};
