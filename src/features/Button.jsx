/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
import propTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import {
    BACKGROUND_COLOR, BORDER_RADIUS,
} from '../theme';
import Text from './Text';

const StyledButton = styled.div(() => ({
    backgroundColor: BACKGROUND_COLOR.green,
    display: 'inline-flex',
    padding: '5px',
    borderRadius: BORDER_RADIUS.allLess,
    margin: '3px',
    cursor: 'pointer',
    overflow: 'hidden',
}));

function Button({ content, handleClick }) {
    return (
        <StyledButton
            onClick={() => handleClick(content)}
        >
            <Text content={content} color="darker" weight="semiBold" />
        </StyledButton>
    );
}

export default React.memo(Button);

Button.propTypes = {
    content: propTypes.string.isRequired,
    handleClick: propTypes.func.isRequired,
};
