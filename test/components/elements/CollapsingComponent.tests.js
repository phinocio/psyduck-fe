import React from 'react';
import Chai, { expect } from 'chai';
import Enzyme, { render, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import chaiEnzyme from 'chai-enzyme'

Enzyme.configure({ adapter: new Adapter() });
Chai.use(chaiEnzyme());

import CollapsingComponent from '../../../source/js/components/elements/CollapsingComponent';

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
    it('renders title from props', () => {
        //Arrange
        const headerClass = 'test-title';
        const title = 'COLLAPSE ME';
        const wrapper = shallow(<CollapsingComponent headerClass={headerClass} title={title} />);

        //Act

        //Assert
        expect(wrapper.find(`.${headerClass}`)).to.have.text(title);

    });
    it('renders children inside wrapperClass node', () => {
        //Arrange
        const wrapperClass = 'test-wrapper';
        const wrapper = shallow(<CollapsingComponent wrapperClass={wrapperClass} >
            <div>Child One</div>
            <div>Child Two</div>
            <div>Child Three</div>
        </CollapsingComponent>);

        //Act
        const children = wrapper.find(`.${wrapperClass}`).children();
        
        //Assert
        expect(children).to.have.length(3);
        expect(children.at(0)).to.have.text('Child One')
        expect(children.at(1)).to.have.text('Child Two')
        expect(children.at(2)).to.have.text('Child Three')

    });
});