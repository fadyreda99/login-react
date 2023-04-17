import { motion } from "framer-motion";
import React, { useState } from "react";
import styled from "styled-components";
import { AccountContext } from "./AccountContext";
import "./Login.css";
import LoginForm from "./LoginForm/LoginForm";
import SignupForm from "./SignupForm/SignupForm";

const BackDrop = styled(motion.div)`
  width: 160%;
  height: 550px;
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  transform: rotate(60deg);
  top: -290px;
  left: -70px;
  background: #fabb20;
`;

const backdropVariants = {
  expanded: {
    width: "233%",
    height: "1050px",
    borderRadius: "20%",
    transform: "rotate(60deg)",
  },
  collapsed: {
    width: "160%",
    height: "550px",
    borderRadius: "50%",
    transform: "rotate(60deg)",
  },
};

const expandingTransition = {
  type: "spring",
  duration: 2.3,
  stiffness: 30,
};

const Login = () => {
  const [isExpanded, setExpanded] = useState(false);
  const [active, setActive] = useState("signin");

  const playExpandingAnimation = () => {
    setExpanded(true);
    setTimeout(() => {
      setExpanded(false);
    }, expandingTransition.duration * 1000 - 1500);
  };

  const switchToSignup = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("signup");
    }, 400);
  };

  const switchToSignin = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("signin");
    }, 400);
  };

  const contextValue = { switchToSignup, switchToSignin };

  return (
    <AccountContext.Provider value={contextValue}>
      <div className="container">
        <div className="row">
          <div className="mainBox mx-auto my-5 ">
            <div className="topContainer">
              <BackDrop
                initial={false}
                animate={isExpanded ? "expanded" : "collapsed"}
                variants={backdropVariants}
                transition={expandingTransition}
              />

              {active === "signin" && (
                <div className="headerContainer">
                  <h2 className="headerText">welcome</h2>
                  <h2 className="headerText">back</h2>
                  <h5 className="smallText">please sign-in to continue!</h5>
                </div>
              )}

              {active === "signup" && (
                <div className="headerContainer">
                  <h2 className="headerText">Create</h2>
                  <h2 className="headerText">Account</h2>
                  <h5 className="smallText">please sign-up to continue!</h5>
                </div>
              )}
            </div>

            <div className="innerContainer">
              {active === "signin" && <LoginForm />}
              {active === "signup" && <SignupForm />}
            </div>
          </div>
        </div>
      </div>
    </AccountContext.Provider>
  );
};

export default Login;
