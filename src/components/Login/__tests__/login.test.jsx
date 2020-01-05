import React from 'react';
import { mount } from 'enzyme';
import Login from '../login';

describe('<Login />', () => {
  it('should render', () => {
    const login = mount(<Login />);
    const loginContainer = login.find('[data-test=\'login-section\']');
    expect(loginContainer.length).toBe(1);
  });

  describe('submit button state', () => {
    it('should disable submit initially', () => {
      const login = mount(<Login />);

      expect(login.find("input[type='submit']").instance().getAttribute('disabled')).toBe('');
    });

    it('should enable submit on valid email and password', () => {
      const login = mount(<Login />);

      login.find("input[type='email']").simulate('change', { target: { value: 'test@gmail.com' } });
      login.find("input[type='password']").simulate('change', { target: { value: 'Password' } });

      expect(login.find("input[type='submit']").instance().getAttribute('disabled')).toBe(null);
    });

    it('should disable submit on invalid email or password', () => {
      const login = mount(<Login />);

      login.find("input[type='email']").simulate('change', { target: { value: 'test.gmail.com' } });
      login.find("input[type='password']").simulate('change', { target: { value: 'Password' } });

      expect(login.find("input[type='submit']").instance().getAttribute('disabled')).toBe('');
    });
  });

  describe('email', () => {
    it('should show error on invalid email', () => {
      const login = mount(<Login />);

      login.find("input[type='email']").simulate('change', { target: { value: 'aa' } });
      expect(login.find("input[type='email']").instance().getAttribute('class')).toMatch(/input-error/);

      login.find("input[type='email']").simulate('change', { target: { value: 'aa@fff' } });
      expect(login.find("input[type='email']").instance().getAttribute('class')).toMatch(/input-error/);

      login.find("input[type='email']").simulate('change', { target: { value: 'aa@fff.c..c...' } });
      expect(login.find("input[type='email']").instance().getAttribute('class')).toMatch(/input-error/);

      login.find("input[type='email']").simulate('change', { target: { value: 'a@b.c' } });
      expect(login.find("input[type='email']").instance().getAttribute('class')).toMatch(/input-error/);

      login.find("input[type='email']").simulate('change', { target: { value: 'aaa' } });
      expect(login.find("input[type='email']").instance().getAttribute('class')).toMatch(/input-error/);
    });

    it('show show success on valid email', () => {
      const login = mount(<Login />);

      login.find("input[type='email']").simulate('change', { target: { value: 'aa@gmail.com' } });
      expect(login.find("input[type='email']").instance().getAttribute('class')).toMatch(/input-success/);
    });
  });

  describe('password', () => {
    it('show show error on invalid password', () => {
      const login = mount(<Login />);

      login.find("input[type='password']").simulate('change', { target: { value: 'password' } });
      expect(login.find("input[type='password']").instance().getAttribute('class')).toMatch(/input-error/);

      login.find("input[type='password']").simulate('change', { target: { value: 'passA' } });
      expect(login.find("input[type='password']").instance().getAttribute('class')).toMatch(/input-error/);
    });

    it('show show success on valid password', () => {
      const login = mount(<Login />);

      login.find("input[type='password']").simulate('change', { target: { value: 'PAsswword' } });
      expect(login.find("input[type='password']").instance().getAttribute('class')).toMatch(/input-success/);
    });
  });
});
