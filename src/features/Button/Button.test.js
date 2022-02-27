/* eslint-disable react/jsx-indent */
import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import {
    DefaultButton,
} from './Button.stories';

it('renders correctly', () => {
    const initialState = {};

    const mockStore = configureStore();
    const store = mockStore(initialState);

    const tree = renderer.create(
        <Provider store={store}>
            <DefaultButton {...DefaultButton.args} />
        </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
