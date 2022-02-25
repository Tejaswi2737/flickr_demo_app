import propTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import {
    BACKGROUND_COLOR, BORDER_RADIUS, FONT_SIZES, FONT_WEIGHTS, LINE_HEIGHTS,
} from '../theme';

const TextStyled = styled.div(() => ({
    fontWeight: FONT_WEIGHTS.semiBold,
    fontSize: FONT_SIZES.mediumMobile,
    lineHeight: LINE_HEIGHTS.mediumMobile,
    backgroundColor: BACKGROUND_COLOR.green,
    display: 'inline-flex',
    padding: '5px',
    borderRadius: BORDER_RADIUS.allLess,
    margin: '3px',
    cursor: 'pointer',
}));

function Button({ content, setvalue }) {
    return (<TextStyled onClick={() => { setvalue(content); }}>{content}</TextStyled>);
}

export default React.memo(Button);

Button.propTypes = {
    content: propTypes.string.isRequired,
    setvalue: propTypes.func.isRequired,
};
