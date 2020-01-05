import React from 'react';
import { mount } from 'enzyme';
import LoginScreen from '../loginScreen';


describe('<LoginScreen />', () => {
  it('should render', () => {
    const loginScreen = mount(<LoginScreen />);
    const loginScreenContainer = loginScreen.find('[data-test=\'login-screen\']');
    expect(loginScreenContainer.length).toBe(1);
  });
});
