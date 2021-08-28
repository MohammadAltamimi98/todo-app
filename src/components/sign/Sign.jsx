import React from "react";
import { useState, useContext } from "react";
import { AuthContext } from "../../context/auth";
import "./sign.scss";
import { useHistory } from "react-router-dom";

function Sign() {
  const history = useHistory();

  // const handleRoute = () =>{
  //   history.push("/about");
  // }
  const [values, setValues] = useState({});
  const [flip, setFlip] = useState(false);
  const { login, signUp, loggedIn } = useContext(AuthContext);

  function handleChange(e) {
    setValues((values) => ({ ...values, [e.target.name]: e.target.value }));
    console.log(values);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!values.role) {
      console.log("no role assign");
      const response = login(values.username, values.password);
      console.log("====================================");
      console.log(loggedIn);
      console.log("====================================");
    } else {
      console.log(values.role);
      const response = signUp(values.username, values.password, values.role);
      console.log(response);
      setValues((values) => ({ ...values, [e.target.name]: "" }));
    }
  }

  function flipFun(e) {
    setValues({});
    setFlip(true);
  }

  function reverseFlipFun(e) {
    setValues({});
    setFlip(false);
  }

  return (
    <div>
      {flip === false ? (
        <div className="loginForm">
          <h1>Sign Up Form </h1>
          <form className="login-form" onSubmit={handleSubmit}>
            <label>Username :</label>
            <input
              type="text"
              onChange={handleChange}
              name="username"
              placeholder="username"
            />
            <br />

            <label>Password :</label>
            <input
              type="password"
              onChange={handleChange}
              name="password"
              placeholder="password"
            />
            <br />

            <label for="role">Choose a role : </label>
            <select
              onClick={handleChange}
              style={{ width: "10rem", marginBottom: "14px" }}
              name="role"
              id="role"
            >
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>
            <br />
            <br />

            <button> Create user</button>
            <p className="message">
              Already registered?{" "}
              <a onClick={() => flipFun(false)} href="/#">
                Sign In
              </a>
            </p>
          </form>
        </div>
      ) : (
        <div className="signupForm">
          <h1>Sign In Form </h1>

          <form className="login-form" onSubmit={handleSubmit}>
            <input
              type="text"
              onChange={handleChange}
              name="username"
              placeholder="username"
            />
            <br />

            <input
              type="password"
              onChange={handleChange}
              name="password"
              placeholder="password"
            />
            <br />
            <br />
            <button> Sign In</button>
            {loggedIn && <a href="/"> Home </a>}

            <p className="message">
              Don't have an account ?{" "}
              <a onClick={() => reverseFlipFun(true)} href="#">
                Sign up
              </a>
            </p>
          </form>
        </div>
      )}
    </div>
  );
}

export default Sign;
