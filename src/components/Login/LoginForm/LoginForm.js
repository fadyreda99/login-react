import React, { useContext } from "react";
import { AccountContext } from "../AccountContext";
import "../../Login/Common.css";

const LoginForm = () => {
  const { switchToSignup } = useContext(AccountContext);

  return (
    <div className="boxContainer">
      <form className="formContainer">
        <input type="email" placeholder="Email" className="inputF input1" />
        <input
          type="password"
          placeholder="Password"
          className="inputF input2"
        />
      </form>
      <br />
      

      <button type="submit" className="submitBtn">
        Signin
      </button>
      <br />
      <a href="#" className="mutedLink">
        Don't have an account?
        <a href="#" className="boldLink" onClick={switchToSignup}>
          Signup
        </a>
      </a>
    </div>
  );
};

export default LoginForm;
