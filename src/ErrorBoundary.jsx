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
  fallbackUI: <div>
    <i className="fa fa-bug" />
    {' '}
    Oops! Something went wrong
  </div>,
};

export default ErrorBoundary;
