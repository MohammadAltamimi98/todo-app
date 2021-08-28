import React, { useState, useEffect } from "react";
import cookie from "react-cookies";
import jwt from "jsonwebtoken";
import superagent from "superagent";
import base64 from "base-64";
import axios from "axios";
const API = "https://auth-server-401.herokuapp.com";
export const AuthContext = React.createContext();

export default function Auth(props) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    const token = cookie.load("auth");
    validateToken(token);
  }, []);

  const validateToken = (token) => {
    if (token !== "undefined" && token !== "null") {
      const user = jwt.decode(token);
      setLoginState(true, token, user);
    } else {
      setLoginState(false, null, {});
    }
  };

  const setLoginState = async (loggedIn, token, user) => {
    try {
      cookie.save("auth", token);
      setUser(user);
      setLoggedIn(loggedIn);
    } catch (error) {
      console.log(`error in setLoginState ====> ${error.message}`);
    }
  };

  const login = async (username, password) => {
    try {
      console.log((username, password));
      const response = await superagent
        .post(`${API}/signin`)
        .set(
          "authorization",
          `Basic ${base64.encode(`${username}:${password}`)}`
        );
      console.log(response);

      validateToken(response.body.token);
    } catch (error) {
      console.error(`error in login function ====> ${error.message}`);
    }
  };

  const logout = () => {
    setLoginState(false, null, {});
  };

  const signUp = async (username, password, role) => {
    try {
      const response = await axios.post(`${API}/signup`, {
        username: username,
        password: password,
        role: role,
      });
      console.log(response);
      validateToken(response.data.token);
    } catch (error) {
      console.log(`error in sign up function ====> ${error.message}`);
    }
  };

  const state = {
    validateToken,
    setLoginState,
    logout,
    signUp,
    loggedIn,
    setLoggedIn,
    user,
    login,
    setUser,
  };

  return (
    <AuthContext.Provider value={state}>{props.children}</AuthContext.Provider>
  );
}
