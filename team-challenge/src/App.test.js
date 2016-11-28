import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';;
import {EmailInput} from './TeamSignUp';


// this test checks the <EmailInput /> component:
// if it pops up error message properly if it's either empty or invalid
describe('<EmailInput /> component', () => {

  // expect that it shows a "require email" message and no "invalid email" message
  it('should warn "need email address" if empty', () => {
    const wrapper = shallow(<EmailInput value={''}/>);
    expect(wrapper.find('.error-missing').text()).toEqual('we need to know your email address')
    || expect(wrapper.find('.error-invalid').length).toEqual(0); 
  });

  // expect that it shows an "invalid email" message and no "require email" message
  it('should warn "email address invalid" if invalid', () => {
    const wrapper = shallow(<EmailInput value={'uw-ischool.com'}/>);
    expect(wrapper.find('.error-invalid').text()).toEqual('this is not a valid email address')
    || expect(wrapper.find('.error-missing').length).toEqual(0);
  });

  // expect that it doesn't show any error message
  it('should not warn anything if neither empty or invalid', () => {
    const wrapper = shallow(<EmailInput value={'ischool@uw.edu'}/>);
    expect(wrapper.find('.help-block').length).toEqual(0);
  });
});


