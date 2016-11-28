import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import {RequiredInput, PasswordConfirmationInput} from './TeamSignUp';
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