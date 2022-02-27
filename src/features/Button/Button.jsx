/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
import propTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { getImagesListAsync } from '../../searchSlice';
import {
    BACKGROUND_COLOR, BORDER_RADIUS,
} from '../../theme';
import Text from '../Text/Text';

const StyledButton = styled.div(() => ({
    backgroundColor: BACKGROUND_COLOR.green,
    display: 'inline-flex',
    padding: '5px',
    borderRadius: BORDER_RADIUS.allLess,
    margin: '3px',
    cursor: 'pointer',
    overflow: 'hidden',
}));

function Button({ content }) {
    const dispatch = useDispatch();

    return (
        <StyledButton
            onClick={() => dispatch(getImagesListAsync(content))}
        >
            <Text content={content} color="darker" weight="semiBold" />
        </StyledButton>
    );
}

export default React.memo(Button);

Button.propTypes = {
    content: propTypes.string.isRequired,
};
