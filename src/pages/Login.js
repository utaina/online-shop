import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { LoginContext } from "../hoc/LoginProvider";

export const Login = () => {
  const { changeLoginStatus } = useContext(LoginContext);
  const navigate = useNavigate();
  const location = useLocation();
  const handleLogin = () => {
    changeLoginStatus(true);
    if (location.state?.to?.pathname) {
      navigate(location.state.to.pathname, { replace: true });
    } else navigate("/");
  };
  return (
    <>
      <h1>Login form</h1>
      <button onClick={handleLogin}>login</button>
    </>
  );
};
