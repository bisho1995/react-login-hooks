import React from 'react';
import { mount } from 'enzyme';
import Spinner from '../Spinner';


describe('<Spinner />', () => {
  it('should render', () => {
    const spinner = mount(<Spinner />);
    const spinnerContainer = spinner.find('[data-test=\'spinner\']');
    expect(spinnerContainer.length).toBe(1);
  });
});
