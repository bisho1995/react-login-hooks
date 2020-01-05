import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }


  componentDidCatch({ message }, { componentStack }) {
    this.setState({ hasError: true });
    const errorMessage = `Broken UI - ${message} | stack ${componentStack}`;

    // eslint-disable-next-line no-console
    console.error(errorMessage);
    // send this message to server
  }

  render() {
    const { fallbackUI, children } = this.props;
    const { hasError } = this.state;

    return hasError ? fallbackUI : children;
  }
}

ErrorBoundary.propTypes = {
  fallbackUI: PropTypes.node,
  children: PropTypes.node.isRequired,
};

ErrorBoundary.defaultProps = {
  fallbackUI: <div style={{
    height: '100vh', background: 'red', color: 'white', textAlign: 'center', fontSize: '30px', paddingTop: '50px',
  }}
  >
    <i className="fa fa-bug" />
    {' '}
    Oops! Something went wrong, please refresh the page
  </div>,
};

export default ErrorBoundary;
