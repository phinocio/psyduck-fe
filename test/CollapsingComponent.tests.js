import React from 'react';
import Chai, { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import chaiEnzyme from 'chai-enzyme'

Enzyme.configure({ adapter: new Adapter() });
Chai.use(chaiEnzyme());

import CollapsingComponent from '../source/js/components/elements/CollapsingComponent';

describe('<CollapsingComponent />', () => {
    it('renders collapsed by default', () => {
        //Arrange
        const wrapper = shallow(<CollapsingComponent />);

        //Act

        //Assert
        expect(wrapper.find(`.entypo-down-open`).exists()).to.equal(true);
        expect(wrapper).to.have.state('open', false);

    });
    it('sets state.open to true when collapse() called', () => {
        //Arrange
        const wrapper = shallow(<CollapsingComponent />);
        const instance = wrapper.instance();

        //Act
        instance.collapse();

        //Assert
        expect(wrapper).to.have.state('open', true);

    });
});