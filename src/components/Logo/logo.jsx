import React from 'react';
import PropTypes from 'prop-types';
import './Logo.scss';

const Logo = ({ size }) => <img className={`healthify-logo healthify-logo--${size}`} src="/healthifyme.png" alt="logo" />;
Logo.propTypes = {
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
};

Logo.defaultProps = {
  size: 'sm',
};


export default Logo;
