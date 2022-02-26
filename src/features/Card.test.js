import React from 'react';
import renderer from 'react-test-renderer';
import {
    DefaultCard,
} from './Card.stories';

it('renders correctly', () => {
    const tree = renderer.create(<DefaultCard {...DefaultCard.args} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
