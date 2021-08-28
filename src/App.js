import React from "react";
import Sign from "./components/sign/Sign";
import ToDo from "./components/todo/ToDo.jsx";
import SettingsContext from "./context/settings";
import Auth from "./context/auth";
import { If, Else, Then } from "react-if";
import { useState, useContext } from "react";
import { AuthContext } from "./context/auth";

function App() {
  const { login, loggedIn } = useContext(AuthContext);
  console.log("====================================");
  console.log(loggedIn);
  console.log("====================================");

  return (
    <>
      <Auth>
        {!loggedIn && <Sign />}

        {loggedIn === true && (
          <SettingsContext>
            <ToDo />
          </SettingsContext>
        )}
      </Auth>
    </>
  );
}

export default App;
