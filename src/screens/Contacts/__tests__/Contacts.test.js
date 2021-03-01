import React from 'react';
import renderer from 'react-test-renderer';

import Contacts from '../Contacts';
jest.mock('@react-navigation/native');

describe('<Contacts />', () => {
    it('renders without crashing', () => {
        const tree = renderer.create(<Contacts />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
