import React from 'react';
import { mount } from 'enzyme';
import LoginScreen from '../loginScreen';


describe('<LoginScreen />', () => {
  it('should render', () => {
    const loginScreen = mount(<LoginScreen />);
    const loginScreenContainer = loginScreen.find('[data-test=\'login-screen\']');

    expect(loginScreenContainer.length).toBe(1);
    expect(loginScreen.find("[data-test='healthify-header-info']").length).toBe(1);

    /** Check after some time due to delay in lazy loading */
    setTimeout(() => {
      expect(loginScreen.find("[data-test='login-section']").length).toBe(1);
    }, 500);
  });
});
