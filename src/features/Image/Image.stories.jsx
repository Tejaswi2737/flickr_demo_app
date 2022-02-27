import React from 'react';

import Image from './Image';

export default {
    title: 'Example/Image',
    component: Image,
    parameters: {
        layout: 'fullscreen',
    },
};

function ImageTemplate(args) {
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Image {...args} />;
}

export const DefaultImage = ImageTemplate.bind({});
DefaultImage.args = {
    imgSrc: 'https://live.staticflickr.com/65535/51902520893_a1886b3020_m.jpg',
};
