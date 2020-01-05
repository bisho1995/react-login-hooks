import React from 'react';
import { mount } from 'enzyme';
import Header from '../header';


describe('<Header />', () => {
  it('should render', () => {
    const header = mount(<Header />);
    const headerContainer = header.find('[data-test=\'healthify-header\']');
    expect(headerContainer.length).toBe(1);
  });
});
