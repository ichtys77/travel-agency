import React from 'react';
import {shallow} from 'enzyme';
import HappyHourAd from './HappyHourAd';

const select = {
  title: '.title',
  promoDescription: '.promoDescription',
};

const mockProps = {
  title: 'Happy Hour',
  promoDescription: '122',
};

describe('Component HappyHourAd', () => {

  it('should render without crashing', () => {
    const component = shallow (<HappyHourAd />);
    expect(component).toBeTruthy();
  });

  it('should render heading and description', () => {
    const component = shallow (<HappyHourAd />);
    // console.log(component.debug());
    expect(component.exists(select.title)).toBeTruthy();
    expect(component.exists(select.promoDescription)).toEqual(true);
  });

  it('should render title && promoDescription props without crashing', () => {
    const component = shallow(<HappyHourAd {...mockProps} />);
    // console.log(component.debug());
    expect(component.find(select.title).text()).toEqual(mockProps.title);
    expect(component.find(select.promoDescription).text()).toEqual(mockProps.promoDescription);
  });

});

describe('Component HappyHourAd with mocked Date', () => {
  const customDate = '2019-05-14T11:57:58.135Z';
  const trueDate = Date;

  const mockDate = class extends Date {
    constructor(...args) {
      if(args.length) {
        super(...args);
      } else {
        super(customDate);
      }
      return this;
    }
    static now(){
      return (new Date(customDate)).getTime();
    }
  };

  it('should show correct at 11:57:58', () => {
    global.Date = mockDate;

    const component = shallow(<HappyHourAd {...mockProps} />);
    const renderedTime = component.find(select.promoDescription).text();
    expect(renderedTime).toEqual('122');

    global.Date = trueDate;
  });

});
