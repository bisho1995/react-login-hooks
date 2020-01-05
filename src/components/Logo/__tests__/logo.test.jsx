import React from 'react';
import { mount } from 'enzyme';
import Logo from '../logo';


describe('<Logo />', () => {
  it('should render', () => {
    const logo = mount(<Logo />);
    const logoContainer = logo.find('[data-test=\'healthify-logo\']');
    expect(logoContainer.length).toBe(1);
  });
});
