/* eslint-disable indent */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-indent */
import propTypes, { string } from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import Button from '../features/Button';
import Image from '../features/Image';
import Text from '../features/Text';
import useDeviceType from '../useDeviceType';

const WIDTH = {
    LARGE_DESKTOP: '12%',
    DESKTOP: '22.5%',
    TABLET: '45%',
    MOBILE: '100%',
};

const StyledImageCard = styled.div(() => ({
    width: WIDTH[useDeviceType()],
    boxShadow: '0 4px 10px 0 rgba(0,0,0,0.1)',
    transition: '0.3s',
    borderRadius: '10px',
    padding: '10px',
    gap: '15px',
}));

const Card = (props) => {
    const {
        imgSrc,
        title,
        dateTaken,
        tags,

    } = props;

    return (
        <StyledImageCard>
            <Image imgSrc={imgSrc} />
            <Text content={title} />
            <Text content={dateTaken} weight="regular" color="lightest" />
            {tags.map((tag) => (
                <Button
                  key={tag}
                  content={tag}
                />
            ))}
        </StyledImageCard>
    );
};

export default React.memo(Card);

Card.propTypes = {
    imgSrc: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    dateTaken: propTypes.string.isRequired,
    tags: propTypes.arrayOf(string).isRequired,
};
