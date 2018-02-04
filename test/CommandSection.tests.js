import React from 'react';
import Chai, { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import chaiEnzyme from 'chai-enzyme'

Enzyme.configure({ adapter: new Adapter() });
Chai.use(chaiEnzyme());

import CommandSection from '../source/js/components/commands/CommandSection';

describe('<CommandSection />', () => {
    it('renders the correct number of items (6)', () => {
        //Arrange
        const itemWrapperClass = 'test-item';
        const items = ['1', '1', '1', '1', '1', '1'];

        const wrapper = shallow(<CommandSection itemWrapperClass={itemWrapperClass} items={items} />);

        //Act

        //Assert
        expect(wrapper.find(`.${itemWrapperClass}`)).to.have.length(6);
    });
    it('renders no items when items is undefined', () => {
        //Arrange
        const itemWrapperClass = 'test-item';
        
        const wrapper = shallow(<CommandSection itemWrapperClass={itemWrapperClass}/>);

        //Act

        //Assert
        expect(wrapper.find(`.${itemWrapperClass}`)).to.have.length(0);
    });
    it('renders the correct title', () => {
        //Arrange
        const titleClass = 'test-title';
        const title = 'goducks';

        const wrapper = shallow(<CommandSection titleClass={titleClass} title={title} />);

        //Act

        //Assert
        expect(wrapper.find(`.${titleClass}`)).to.have.text(title);
    });
});