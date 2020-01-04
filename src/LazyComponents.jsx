/* eslint-disable */
import ReactDynamicImport from 'react-dynamic-import';

export const LazyLoginPage = ReactDynamicImport({
  loader: () => import(
    /* webpackPrefetch: true, webpackChunkName: "LoginScreen" */
    './features/LoginScreen'
  ),
});

export const LazyLogin = ReactDynamicImport({
  loader: () => import(
    /* webpackPrefetch: true, webpackChunkName: "Login" */
    './components/Login/login'
  ),
});
