/* eslint-disable react/jsx-indent */
import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import {
    DefaultCard,
} from './Card.stories';

it('renders correctly', () => {
    const initialState = {};

    const mockStore = configureStore();
    const store = mockStore(initialState);
    const tree = renderer.create(
        <Provider store={store}>
            <DefaultCard {...DefaultCard.args} />
        </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
