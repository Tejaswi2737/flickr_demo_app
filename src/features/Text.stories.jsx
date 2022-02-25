import React from 'react';

import Text from './Text';

export default {
    title: 'Example/Text',
    component: Text,
    parameters: {
        layout: 'fullscreen',
    },
};

function TextTemplate(args) {
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Text {...args} />;
}

export const DefaultText = TextTemplate.bind({});
DefaultText.args = {
    content: 'Hello',
    color: 'darkest',
};

export const RegularText = TextTemplate.bind({});
RegularText.args = {
    ...DefaultText.args,
    weight: 'regular',
    color: 'dark',
};

export const CustomizedText = TextTemplate.bind({});
CustomizedText.args = {
    ...DefaultText.args,
    weight: 'regular',
    heigt: 'medium',
    color: 'dark',
    size: 'small',
};
