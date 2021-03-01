import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import InfoCont from '../InfoCont';

describe('<InfoCont />', () => {
    it('renders without crashing', () => {
        const tree = renderer.create(<InfoCont />).toJSON();
        expect(tree).toMatchSnapshot();
    });


// test to see if the function will return null if the month or day is too great.
    it('renders null if Birthdate month number is over 12', () => {
        const comp = shallow(<InfoCont header="Birthdate" text="1975-13-31" />);
        expect(comp.get(0)).toBeFalsy();
    });

    it('renders null if Birthdate month number is under 1', () => {
        const comp = shallow(<InfoCont header="Birthdate" text="1975-0-31" />);
        expect(comp.get(0)).toBeFalsy();
    });

    it('renders null if Birthdate day number is over 31', () => {
        const comp = shallow(<InfoCont header="Birthdate" text="1975-12-32" />);
        expect(comp.get(0)).toBeFalsy();
    });

    it('renders null if Birthdate day number is under 1', () => {
        const comp = shallow(<InfoCont header="Birthdate" text="1975-12-0" />);
        expect(comp.get(0)).toBeFalsy();
    });

});



