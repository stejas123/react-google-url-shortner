import React from 'react';
import ReactDOM from 'react-dom';
import GoogleUrlShortner from './reactUrlShortner';
import { shallow, mount } from 'enzyme';

/* setup function for component */
function setup() {
  const props = {
    url: jest.string,
    GOOGLE_API_KEY: jest.string
  };
  const enzymeWrapper = mount(<GoogleUrlShortner className="test" url="http://google.com" GOOGLE_API_KEY="AIzaSyAipe4imoEeDJcuVr281_oEdy61kP2tl6k" />);
  return {
    props,
    enzymeWrapper
  }
}

describe('Google Url Shortner Tests', ()=>{
  it('Check whether app is present', () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper).toHaveLength(1);
  });
  it('check wether all required props values are present', ()=> {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.props().url).toBe('http://google.com');
    expect(enzymeWrapper.props().GOOGLE_API_KEY).toBe('AIzaSyAipe4imoEeDJcuVr281_oEdy61kP2tl6k');
  });
});
