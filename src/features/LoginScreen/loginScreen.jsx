import React from 'react';
import { Header } from '../../components';
import ErrorBoundary from '../../ErrorBoundary';
// eslint-disable-next-line import/named
import { LazyLogin as Login } from '../../LazyComponents';
import './LoginScreen.scss';

const LoginScreen = () => (
  <ErrorBoundary>
    <div data-test="login-screen" className="login-screen">
      <Header headerInfo="Accounts" />
      <div className="login-screen-login">
        <Login className="center-section-horizontal" />
      </div>
    </div>
  </ErrorBoundary>
);

export default LoginScreen;
