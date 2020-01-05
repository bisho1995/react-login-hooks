import React from 'react';
import { mount } from 'enzyme';
import FormInput from '../FormInput';


describe('<FormInput />', () => {
  it('should render', () => {
    const formInput = mount(<FormInput />);
    const formInputContainer = formInput.find('[data-test=\'form-input\']');
    expect(formInputContainer.length).toBe(1);
  });
});
