import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';;
import {EmailInput, BirthdayInput} from './TeamSignUp';
import App from './App';


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



//test if the birthday input field
describe('<BirthdayInput> component', () => {
  it('should display error message if the input is blank', () => {
    const wrapper = shallow(<BirthdayInput value=''/>); 
    expect(wrapper.find('.error-missing').text()).toEqual('we need to know your birthdate')//expect there is message for missing input
    || expect(wrapper.find('.error-invalid').length).toEqual(0) //expect there is no message for invalid output
    || expect(wrapper.find('.error-not-old').length).toEqual(0); //expect there is no message for age limit
  });

  it('should display error message if the birthday date is not the valid date', () => {
    const wrapper = shallow(<BirthdayInput value='this is a string, not a date'/>); 
    expect(wrapper.find('.error-invalid').text()).toEqual("that isn't a valid date")//expect there is no message for invalid output
    || expect(wrapper.find('.error-missing').length).toEqual(0) //expect there is no message for missing input
    || expect(wrapper.find('.error-not-old').length).toEqual(0); //expect there is no message for age limit
  });

  it('should display error message if the age input doesnt meet the requirement', () => {
    const wrapper = shallow(<BirthdayInput value='Mar 25 2015'/>); 
    expect(wrapper.find('.error-not-old').text()).toEqual("sorry, you must be at least 13 to sign up")//expect there is no message for age limit
    || expect(wrapper.find('.error-missing').length).toEqual(0) //expect there is no message for missing input
    || expect(wrapper.find('.error-invalid').length).toEqual(0); //expect there is no message for invalid output
  });
})

