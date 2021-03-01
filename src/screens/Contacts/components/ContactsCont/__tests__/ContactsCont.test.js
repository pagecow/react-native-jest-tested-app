import React from 'react';
import renderer from 'react-test-renderer';

import ContactsCont from '../ContactsCont';

describe('<ContactsCont />', () => {
    it('renders without crashing', () => {
        const tree = renderer.create(<ContactsCont />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders with the fav prop equal to true', () => {
        const tree = renderer.create(<ContactsCont fav="true" />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders with the fav prop equal to false', () => {
        const tree = renderer.create(<ContactsCont fav="false" />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
