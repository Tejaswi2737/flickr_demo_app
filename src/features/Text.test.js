import React from 'react';
import renderer from 'react-test-renderer';
import {
    DefaultText,
    RegularText,
    CustomizedText,
} from './Text.stories';

it('renders correctly', () => {
    const tree = renderer.create(<DefaultText {...DefaultText.args} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it('renders correctly', () => {
    const tree = renderer.create(<RegularText {...RegularText.args} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it('renders correctly', () => {
    const tree = renderer.create(<CustomizedText {...CustomizedText.args} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
