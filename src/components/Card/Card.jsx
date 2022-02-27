/* eslint-disable indent */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-indent */
import propTypes, { string } from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import Button from '../../features/Button/Button';
import Image from '../../features/Image/Image';
import Text from '../../features/Text/Text';
import useDeviceType from '../../useDeviceType';

const getCardWidthRatio = (columns) => `${((((1 - 0.02 * 2 * columns) * (window.innerWidth - 40 - (columns - 1) * 20)) / columns) * 100) / window.innerWidth}%`;

const CARD_WIDTH = {
    LARGE_DESKTOP: getCardWidthRatio(6),
    DESKTOP: getCardWidthRatio(4),
    TABLET: getCardWidthRatio(2),
    MOBILE: '100%',
};

const StyledImageCard = styled.div(() => ({
    width: CARD_WIDTH[useDeviceType()],
    boxShadow: '0 4px 10px 0 rgba(0,0,12,0.3)',
    transition: '0.3s',
    borderRadius: '10px',
    padding: '2%',
}));

const Card = (props) => {
    const {
        imgSrc,
        title,
        dateTaken,
        tags,
        externalImageLink,
    } = props;

    return (
        <StyledImageCard>
            <Image imgSrc={imgSrc} externalImageLink={externalImageLink} />
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
    externalImageLink: propTypes.string.isRequired,
};
