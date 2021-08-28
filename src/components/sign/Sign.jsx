import React from 'react'
import { useState } from 'react';


function Sign() {
  const [values, setValues] = useState({});
  const [flip, setFlip] = useState(false)

  function handleChange(e) {
    setValues((values) => ({ ...values, [e.target.name]: e.target.value }));
    console.log(values);
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


      {flip === false ?

        <>
          <h1>Sign Up Form </h1>
          <form className="login-form">
            <input type="text" onChange={handleChange} name="username" placeholder="username" />
            <input type="password" onChange={handleChange} name="password" placeholder="password" />
            <label for="role">Choose a role:</label>
            <select onClick={handleChange} style={{ width: '10rem', marginBottom: '14px' }} name="role" id="role">
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>
            <button> Create user</button>
            <p className="message">
              Already registered?{' '}
              <a onClick={() => flipFun(false)} href="#">
                Sign In
              </a>
            </p>
          </form>
        </>
        :
        <>
          <h1>Sign In Form </h1>

          <form className="login-form">
            <input type="text" onChange={handleChange} name="username" placeholder="username" />
            <input type="password" onChange={handleChange} name="password" placeholder="password" />
            <button> Sign In</button>

            <p className="message">
              Don't have an account ?{' '}
              <a onClick={() => reverseFlipFun(true)} href="#">
                Sign up
              </a>
            </p>
          </form>
        </>}

    </div>
  )
}

export default Sign
