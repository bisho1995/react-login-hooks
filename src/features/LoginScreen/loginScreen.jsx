import React from 'react';
import { Header } from '../../components';
import ErrorBoundary from '../../ErrorBoundary';
// eslint-disable-next-line import/named
import { LazyLogin as Login } from '../../LazyComponents';
import "./LoginScreen.scss"

const LoginScreen = () => (
  <ErrorBoundary>
    <div className="login-screen">
      <Header sectionInfo="Accounts" />
      <div className="login-screen-login">
        <Login className="center-section-horizontal"/>
      </div>
    </div>
  </ErrorBoundary>
);

export default LoginScreen;
