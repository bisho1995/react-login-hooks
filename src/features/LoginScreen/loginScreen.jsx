import React from 'react';
import { Header } from '../../components';
import ErrorBoundary from '../../ErrorBoundary';
// eslint-disable-next-line import/named
import { LazyLogin as Login } from '../../LazyComponents';

const LoginScreen = () => (
  <ErrorBoundary>
    <div>
      <Header />
      <Login />
    </div>
  </ErrorBoundary>
);

export default LoginScreen;
