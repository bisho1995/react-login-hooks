import React from 'react';
import PropTypes from 'prop-types';
import './Header.scss';
import { Logo } from '../index';

const Header = ({ headerInfo, className, ...rest }) => (
  <header data-test="healthify-header" className={`healthify-header padding-left-lg flex flex-align-center ${className}`} {...rest}>
    <Logo size="xs" />
    {headerInfo ? <span data-test="healthify-header-info" className="margin-left-sm">{` | ${headerInfo}`}</span> : null}
  </header>
);

Header.propTypes = {
  headerInfo: PropTypes.string,
  className: PropTypes.string,
};
Header.defaultProps = {
  headerInfo: '',
  className: '',
};

export default Header;
