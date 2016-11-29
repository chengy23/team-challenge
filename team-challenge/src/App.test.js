import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow, mount} from 'enzyme';
import SignUpForm, {EmailInput} from './TeamSignUp';
import sinon from 'sinon';

//render the App, return a "wrapper" for the root elem
const wrapper = shallow(<App />);
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

describe('reset button', () => {
  it('fill in random text', () => {
      const signUpForm = mount(<SignUpForm />);
      const button = signUpForm.find('#resetButton');
      const input = signUpForm.find('#email');
      input.simulate('change', {target:{value:'fake@fake.com'}});
      button.simulate('click');
      expect(input.html()).toEqual('<input type="email" id="email" name="email" class="form-control alert-danger" placeholder="email address" value="">');
  });
})

describe('submit button', () => {
  it('fill in text then press submit button', () => {
      const overallApp = mount(<SignUpForm />);
      const form = overallApp.find('form');
      const nameInput = overallApp.find('#name');
      const dobInput = overallApp.find('#dob');
      const passwordInput = overallApp.find('#password');
      const passwordConfirmInput = overallApp.find('#passwordConf');
      const emailInput = overallApp.find('#email');
      nameInput.simulate('change', {target:{value:'Quan'}});
      emailInput.simulate('change', {target:{value:'fake@fake.com'}});
      dobInput.simulate('change', {target:{value:'1/20/1996'}});
      passwordInput.simulate('change', {target:{value:'hello'}});
      passwordConfirmInput.simulate('change', {target:{value:'hello'}});      
      form.simulate('submit');
      const congratulateBox = overallApp.find('.alert-success');
      expect(congratulateBox.text()).toEqual('Thanks for signing up!')
  });
})


