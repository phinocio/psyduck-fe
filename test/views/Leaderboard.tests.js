import React from 'react';
import Chai, { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import chaiEnzyme from 'chai-enzyme'

Enzyme.configure({ adapter: new Adapter() });
Chai.use(chaiEnzyme());

import Leaderboard from '../../source/js/views/Leaderboard';

describe('<Leaderboard />', () => {
    it('mounts', () => {
        //Arrange

        //Act

        //Assert
    });
});