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

const WIDTH = {
    LARGE_DESKTOP: '12%',
    DESKTOP: '20%',
    TABLET: '44%',
    MOBILE: '96%',
};

const StyledImageCard = styled.div(() => ({
    width: WIDTH[useDeviceType()],
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
