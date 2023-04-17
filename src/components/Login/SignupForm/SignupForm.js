import React, { useContext } from "react";
import { AccountContext } from "../AccountContext";
import "../../Login/Common.css";

const SignupForm = () => {
  const { switchToSignin } = useContext(AccountContext);

  return (
    <div className="boxContainer">
      <form className="formContainer">
        <input type="text" placeholder="Your Name" className="inputF input1" />
        <input type="email" placeholder="Email" className="inputF " />
        <input type="password" placeholder="Password" className="inputF " />
        <input
          type="password"
          placeholder="Confirm Password"
          className="inputF input2"
        />
      </form>
      <br />

      <button type="submit" className="submitBtn">
        Signin
      </button>
      <br />
      <a href="#" className="mutedLink">
        Already have an account?
        <a href="#" className="boldLink" onClick={switchToSignin}>
          Signin
        </a>
      </a>
    </div>
  );
};

export default SignupForm;
