import React from 'react';
import renderer from 'react-test-renderer';

import AppNavigation from '../AppNavigation';

describe('<AppNavigation />', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<AppNavigation />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
