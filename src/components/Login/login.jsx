import React, {useState, useCallback, memo, useEffect} from 'react';
import { Spinner, Logo, FormInput } from '../index';
import {isValidEmail, isValidPassword} from "../../utils/utils"
import "./Login.scss";

const Login = ({className, ...props}) => {
  const [email, setEmail] = useState({value: '', error: ''})
  const [password, setPassword] = useState({value: '', error: ''})
  const [disabled, setDisabled] = useState(true)

  console.log({email,password,disabled})
  const formSubmit = useCallback(e => {
    e.preventDefault()


  }, [])


  useEffect(()=> {
    const emailValidation = isValidEmail(email.value)
    const passwordValidation = isValidPassword(password.value)
    const newDisabledState = !(emailValidation.status && passwordValidation.status)
    if(disabled != newDisabledState) setDisabled(newDisabledState)


  }, [email, password, disabled])

  return (
    <div className={`login-section text-center padding-md ${className}`} {...props}>
      <Logo className="margin-md"/><br />
      <h1 className="no-margin login-section-header">Sign in</h1><br />
      Use your Healthifyme Account
      <form onSubmit={formSubmit}>
        <FormInput type="email" name="email" placeholder="Enter your Email" required value={email.value} error={email.error} onChange={e=>{setEmail({...email, value: e.target.value})}}/>
        <FormInput type="password" name="password" placeholder="Enter your Password" required value={password.value} error={password.error} onChange={e=>{setPassword({...password, value: e.target.value})}}/>
        <FormInput type="submit" name="submit" value="Login" className="login-section-submit" disabled={disabled}/>
      </form>
    </div>
  )
}

export default memo(Login);
