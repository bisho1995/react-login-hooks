import React from 'react';
import { mount } from 'enzyme';
import Header from '../header';


describe('<Header />', () => {
  it('should render', () => {
    const header = mount(<Header />);
    const headerContainer = header.find('[data-test=\'healthify-header\']');
    expect(headerContainer.length).toBe(1);
  });

  it('should not have headerInfo by default', () => {
    const header = mount(<Header />);
    const headerInfo = header.find('[data-test=\'healthify-header-info\']');

    expect(headerInfo.length).toBe(0);
  });

  it('should have headerInfo when provided', () => {
    const header = mount(<Header headerInfo="Account" />);
    const headerInfo = header.find('[data-test=\'healthify-header-info\']');

    expect(headerInfo.length).toBe(1);
  });
});
