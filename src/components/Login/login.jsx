import React, {
  useState, useCallback, memo, useEffect,
} from 'react';
import PropTypes from 'prop-types';
import { Spinner, Logo, FormInput } from '../index';
import { isValidEmail, isValidPassword } from '../../utils/utils';
import './Login.scss';

const Login = ({ className, ...props }) => {
  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });
  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const emailValidity = isValidEmail(email.value);
  const passwordValidity = isValidPassword(password.value);

  const formSubmit = useCallback(async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      await (await fetch('http://www.mocky.io/v2/5d9d9219310000153650e30b')).json();

      if (error)setError('');
    } catch (err) {
      console.error(err);
      setError('Oops! something went wrong, please try again');
    }
    setLoading(false);
  }, [error]);

  const handleEmailChange = useCallback((e) => {
    setEmail({ value: e.target.value, error: isValidEmail(e.target.value).error });
  }, [setEmail]);

  const handlePasswordChange = useCallback((e) => {
    setPassword({ value: e.target.value, error: isValidPassword(e.target.value).error });
  }, [setPassword]);

  useEffect(() => {
    const newDisabledState = !!(emailValidity.error || passwordValidity.error);
    if (disabled !== newDisabledState) setDisabled(newDisabledState);
  }, [email, password, disabled]);

  return (
    <div className={`login-section text-center ${className}`} {...props}>
      <Logo className="margin-md" />
      <br />
      <h1 className="no-margin login-section-header">Sign in</h1>
      <br />
      Use your Healthifyme Account
      <br />
      {loading ? <Spinner /> : null}
      {error ? <div className="red-text">{error}</div> : null}
      <form onSubmit={formSubmit}>
        <FormInput type="email" name="email" placeholder="Enter your Email" required value={email.value} error={email.error} success={emailValidity.status} onChange={handleEmailChange} />
        <FormInput type="password" name="password" placeholder="Enter your Password" required value={password.value} error={password.error} success={passwordValidity.status} onChange={handlePasswordChange} />
        <FormInput type="submit" name="submit" value="Login" className="login-section-submit" disabled={disabled || loading} />
      </form>
    </div>
  );
};

Login.propTypes = {
  className: PropTypes.string,
};
Login.defaultProps = {
  className: '',
};

export default memo(Login);
