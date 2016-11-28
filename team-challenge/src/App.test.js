import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BirthdayInput} from './TeamSignUp';
import {shallow} from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
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