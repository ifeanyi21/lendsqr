import React from "react";
import LoginImage from "../../assests/images/loginImage.png";
import { Logo } from "../../assests/svg/svg";
import LoginForm from "../../components/Form/LoginForm";

const Login = () => {
  return (
    <div className="container">
      <div style={{ marginTop: 106 }}>
        <Logo />
      </div>

      <div className="row">
        <div className="col-lg-6">
          <div style={{ marginTop: 139 }}>
            <img src={LoginImage} className="img-fluid" alt="Login SVG" />
          </div>
        </div>
        <div className="col-lg-6">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
