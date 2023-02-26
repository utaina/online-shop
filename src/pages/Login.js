import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {Input} from '../components/Input/Input';
import { Button } from "../components/Button/Button";
import { LoginContext } from "../hoc/LoginProvider";

export const Login = () => {
  const [loginInfo, setLoginInfo] = useState({username: '', password: ''})
  const [hasError, setHasError] = useState(false)
  const { changeLoginStatus } = useContext(LoginContext);
  const navigate = useNavigate();
  const location = useLocation();
  const handleLogin = (event) => {
    event.preventDefault();
    if (loginInfo.username === '' && loginInfo.password === '') {
      changeLoginStatus(true);
      (location.state?.to?.pathname) ? navigate(location.state.to.pathname, { replace: true }) : navigate("/");
    } else {setHasError(true)}
      
    } 
  const handleChange = (event) => {
    setLoginInfo(loginInfo => {
      return {
        ...loginInfo,
        [event.target.id]: event.target.value,
      };
  })}
  return (
    <form className="form-container">
      <h1 className="form-header">Login form</h1>
      <Input id='username' value={loginInfo.username} handleChange={handleChange} error={hasError}></Input>
      <Input id='password' value={loginInfo.password}  handleChange={handleChange} error={hasError}></Input>
      <Button name='Login' onClick={handleLogin}></Button>
    </form>
  );
}
