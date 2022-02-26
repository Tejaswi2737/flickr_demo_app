import React from 'react';
import renderer from 'react-test-renderer';
import {
    DefaultButton,
} from './Button.stories';

it('renders correctly', () => {
    const tree = renderer.create(<DefaultButton {...DefaultButton.args} />).toJSON();
    expect(tree).toMatchSnapshot();
});
