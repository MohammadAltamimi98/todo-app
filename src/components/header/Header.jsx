import React from "react";
import { Navbar, Button, Alignment } from "@blueprintjs/core";
import "./header.scss";
import { useContext } from "react";
import { AuthContext } from "../../context/auth";

function Header(props) {
  const { logout, loggedIn } = useContext(AuthContext);
  return (
    <div>
      <Navbar className="rule">
        <Navbar.Group align={Alignment.LEFT}>
          <Navbar.Heading>To-Do list</Navbar.Heading>
          <Navbar.Divider />
          <a href="/">
            <Button icon="home" text="Home" />
            <a href="/">
              <Button text="Logout"  className="btn1" onClick={logout} />
            </a>
          </a>
        </Navbar.Group>
      </Navbar>
    </div>
  );
}

export default Header;
