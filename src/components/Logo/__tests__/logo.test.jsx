import React from 'react';
import { mount } from 'enzyme';
import Logo from '../logo';


describe('<Logo />', () => {
  it('should render', () => {
    const logo = mount(<Logo />);
    const logoContainer = logo.find('[data-test=\'healthify-logo\']');
    expect(logoContainer.length).toBe(1);
  });

  it('proper size should be rendered', () => {
    const logo = mount(<Logo />);

    expect(logo.find('[data-test=\'healthify-logo\']').instance().className).toMatch(/healthify-logo--sm/);

    logo.setProps({ size: 'lg' });
    expect(logo.find('[data-test=\'healthify-logo\']').instance().className).toMatch(/healthify-logo--lg/);
  });
});
