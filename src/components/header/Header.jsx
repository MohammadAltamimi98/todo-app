import React from 'react';
import { Navbar, Button, Alignment } from '@blueprintjs/core';
import './header.scss';

function Header(props) {
  return (
    <div>
      <Navbar className="rule">
        <Navbar.Group align={Alignment.LEFT}>
          <Navbar.Heading>To-Do list</Navbar.Heading>
          <Navbar.Divider />
          <a href="/"><Button icon="home" text="Home" /></a>
        </Navbar.Group>
      </Navbar>
    </div>
  )
}

export default Header;

