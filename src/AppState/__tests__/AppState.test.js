import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import AppState from '../AppState';
import { fetchData, sortObject, filterObjFavs, filterObjNonFavs } from '../testFunctions';

describe('AppState', () => {
    let wrapper;

    it('renders without crashing', () => {
        wrapper = shallow(<AppState />);
        expect(wrapper).not.toBeNull();
    });

    test('axios loads correctly', async () => {
        expect.assertions(1);
        const data = await fetchData();
        expect(data[0].name).toEqual('Miss Piggy');     
    });

    test('data sorts alphabetically by name works', async () => {
        const data = await sortObject();
        expect(data).toEqual(['Charlie Brown', 'Hermione Granger', 'Miss Piggy', 'Roger Rabbit', 'Winnie-the-Pooh']);
    })

    test('data filters by favorite status true', async () => {
        const data = await filterObjFavs();
        expect(data.length).toBe(2);
    })

    test('data filters by favorite status false', async () => {
        const data = await filterObjNonFavs();
        expect(data.length).toBe(3);
    })

})
