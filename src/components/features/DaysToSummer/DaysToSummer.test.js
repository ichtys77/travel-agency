import React from 'react';
import {shallow} from 'enzyme';
import DaysToSummer from './DaysToSummer';

const select = {
  daysDescription: '.daysDescription',
};

const mockProps = {
  daysDescription: 'XXX days to summer',
};

describe('Component DaysToSummer', () => {
  it('should render without crashing', () => {
    const component = shallow (<DaysToSummer />);
    expect(component).toBeTruthy();
  });

  it('should render description', () => {
    const component = shallow (<DaysToSummer />);
    expect(component.exists(select.daysDescription)).toEqual(true);
  });

  it('should render description props without crashing', () => {
    const component = shallow(<DaysToSummer {...mockProps} />);
    // console.log(component.debug());
    expect(component.find(select.daysDescription).text()).toEqual(mockProps.daysDescription);
  });

});

