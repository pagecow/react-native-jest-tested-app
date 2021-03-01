import React from 'react';
import renderer from 'react-test-renderer';

import DetailsScreen from '../DetailsScreen';
import { dummyData } from '../dummyData.json'

describe('<DetailsScreen />', () => {
    it('renders without crashing', () => {
        const tree = renderer.create(<DetailsScreen />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders with the chosenContactInfo prop included', () => {
        const tree = renderer.create(<DetailsScreen chosenContactInfo={dummyData} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
