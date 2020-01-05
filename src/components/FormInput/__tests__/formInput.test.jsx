import React from 'react';
import { mount } from 'enzyme';
import FormInput from '../FormInput';


describe('<FormInput />', () => {
  it('should render', () => {
    const formInput = mount(<FormInput />);
    const formInputContainer = formInput.find('[data-test=\'form-input\']');

    expect(formInputContainer.length).toBe(1);
  });

  it('should not have message by default', () => {
    const formInput = mount(<FormInput />);
    const formInputContainer = formInput.find('[data-test=\'form-input-message\']');

    expect(formInputContainer.length).toBe(0);
  });

  it('should have error message when provided', () => {
    const formInput = mount(<FormInput error="Sample error message" />);
    const formInputContainer = formInput.find('[data-test=\'form-input-message\']');

    expect(formInputContainer.length).toBe(1);
    expect(formInputContainer.text()).toBe('Sample error message');
  });

  it('should provide value what is provided', () => {
    const formInput = mount(<FormInput value="value1" />);

    expect(formInput.find('input').instance().value).toBe('value1');

    formInput.setProps({ value: 'new value' });
    expect(formInput.find('input').instance().value).toBe('new value');
  });

  it('should render input of proper type', () => {
    const formInput = mount(<FormInput value="value1" />);

    expect(formInput.find('input').instance().getAttribute('type')).toBe('text');

    formInput.setProps({ type: 'checkbox' });
    expect(formInput.find('input').instance().getAttribute('type')).toBe('checkbox');

    formInput.setProps({ type: 'submit' });
    expect(formInput.find('input').instance().getAttribute('type')).toBe('submit');
  });

  it('should not change value of form by default', () => {
    const formInput = mount(<FormInput />);

    formInput.find('input').simulate('change', {target: {value: 'sss'}});
    expect(formInput.find('input').instance().value).toBe('');
  });
});
