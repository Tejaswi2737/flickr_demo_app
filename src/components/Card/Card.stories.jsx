/* eslint-disable no-console */
import React from 'react';

import Card from './Card';

export default {
    title: 'Example/Card',
    component: Card,
    parameters: {
        layout: 'fullscreen',
    },
};

function CardTemplate(args) {
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Card {...args} />;
}

export const DefaultCard = CardTemplate.bind({});
DefaultCard.args = {
    imgSrc: 'https://live.staticflickr.com/65535/51902520893_a1886b3020_m.jpg',
    title: 'Image Title',
    dateTaken: '24 Feb 2021',
    tags: ['mountain', 'potrait', 'picture', 'nixon'],
    setvalue: () => console.log('setting value'),
    setsearchImages: () => console.log('searching image'),
    externalImageLink: 'https://www.flickr.com/photos/manhartravels/51902618838/',
};
