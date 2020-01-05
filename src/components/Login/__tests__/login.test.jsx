import React from 'react';
import { mount } from 'enzyme';
import Login from '../login';


describe('<Login />', () => {
  it('should render', () => {
    const login = mount(<Login />);
    const loginContainer = login.find('[data-test=\'login-section\']');
    expect(loginContainer.length).toBe(1);
  });
});
