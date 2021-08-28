import React from "react";
import Sign from "./components/sign/Sign";
import ToDo from "./components/todo/ToDo.jsx";
import SettingsContext from "./context/settings";
import Auth from "./context/auth";
import { If, Else, Then } from "react-if";
import { useState, useContext } from "react";
import AuthContext from "./context/auth.jsx";

function App() {
  const { login, loggedIn } = useContext(AuthContext);

  return (
    <>
      <Auth>
        <Sign />
        <SettingsContext>
          <ToDo />
        </SettingsContext>
      </Auth>
    </>
  );
}

export default App;
