import React from 'react';

import Button from './Button';

export default {
    title: 'Example/Button',
    component: Button,
    parameters: {
        layout: 'fullscreen',
    },
};

function ButtonTemplate(args) {
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Button {...args} />;
}

export const DefaultButton = ButtonTemplate.bind({});
DefaultButton.args = {
    content: 'Button',
    // eslint-disable-next-line no-alert
    handleClick: () => alert('clicked'),
};
