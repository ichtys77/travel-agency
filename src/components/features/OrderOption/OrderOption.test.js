import React from 'react';
import {shallow} from 'enzyme';
import OrderOption from './OrderOption';

describe('Component OrderOption', () => {
  it('should render without crashing', () =>{
    const component = shallow(<OrderOption name={'Lorem'} type={'input'}/>);
    expect(component).toBeTruthy();
  });


  it('should return empty object if called without required props', () => {
    const component = shallow(<OrderOption />);
    expect(component).toEqual({});
  });

  it('should render name props without crashing', () => {
    const expectedName = 'Lorem';
    const expectedType = 'dropdown';
    const component = shallow(<OrderOption name={expectedName} type={expectedType}/>);
    const renderedName = component.find('.title').text();
    expect(renderedName).toEqual(expectedName);
  });

});

const optionTypes = {
  dropdown: 'OrderOptionDropdown',
  icons: 'OrderOptionIcons',
  checkboxes: 'OrderOptionCheckboxes',
  number: 'OrderOptionNumber',
  text: 'OrderOptionText',
  date: 'OrderOptionDate',
};

for(let type in optionTypes){
  describe(`Component OrderOption with type=${type}`, () => {
    /* test setup */

    /* common tests */
    it('passes dummy test', () => {
      expect(1).toBe(1);
    });

    /* type-specific tests */
    switch (type) {
      case 'dropdown': {
        /* tests for dropdown */
        break;
      }
    }
  });
}
