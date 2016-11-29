import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import {RequiredInput, PasswordConfirmationInput, EmailInput, BirthdayInput} from './TeamSignUp';
import SignUpForm from './TeamSignUp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SignUpForm />, div);
});

//test if the name field is empty
describe('<RequiredInput /> name component', () => {
  it("should throw error message when name field is empty", () => {
    const wrapper = shallow(<RequiredInput errorMessage={"we need to know your name"} value={''}/>);
    //expect to throw error message when user didn't type name
    expect(wrapper.find('.error-missing').text()).toEqual('we need to know your name');
  });

  it("should do nothing when the name field is not empty", () => {
    const wrapper = shallow(<RequiredInput value={'name'} />);
    //expect that there is no error message
    expect(wrapper.contains('.error-missing')).toEqual(false);
  });
});

//test if the password field is empty
describe('<RequiredInput /> password component', () => {
  it("should throw error message when password field is empty", () => {
    const wrapper = shallow(<RequiredInput errorMessage={"your password can't be blank"} value={''}/>);
    //expect to throw error message when user didn't type their password
    expect(wrapper.find('.error-missing').text()).toEqual("your password can't be blank");
  });
  
  it("should do nothing when the password field is not empty", () => {
    const wrapper = shallow(<RequiredInput value={'123'} />);
    //expect that there is no error message
    expect(wrapper.contains('.error-missing')).toEqual(false);
  });
});

//test if the password confirmation input match the password input
describe('<PasswordConfirmationInput /> component', () => {
  it("should throw error message when the password confirmation does not match the password", () => {
    const passwordConf = shallow(<PasswordConfirmationInput password={'123'} errorMessage={"password don't match"} value={'12'}/>);
    //expect to throw error message when the password confirmation does not match the password
    expect(passwordConf.find('.error-mismatched').text()).toEqual("passwords don't match");
  });
    
  it("should do nothing when the password confirmation field match the password field", () => {
    const passwordConf = shallow(<PasswordConfirmationInput password={'12'} value={'12'}/>);
    //expect that there is no error message
    expect(passwordConf.contains('.error-mismatched')).toEqual(false);
  });
});


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