import React from 'react';
import PropTypes from 'prop-types';
import './Header.scss';
import { Logo } from '../index';

const Header = ({ sectionInfo, className, ...rest }) => (
  <header className={`healthify-header margin-left-lg flex flex-align-center ${className}`} {...rest}>
    <Logo size="xs" />
    {sectionInfo ? <span className="margin-left-sm">{` | ${sectionInfo}`}</span> : null}
  </header>
);

Header.propTypes = {
  sectionInfo: PropTypes.string,
  className: PropTypes.string,
};
Header.defaultProps = {
  sectionInfo: '',
  className: '',
};

export default Header;
