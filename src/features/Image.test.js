import React from 'react';
import renderer from 'react-test-renderer';
import {
    DefaultImage,
} from './Image.stories';

it('renders correctly', () => {
    const tree = renderer.create(<DefaultImage {...DefaultImage.args} />).toJSON();
    expect(tree).toMatchSnapshot();
});
