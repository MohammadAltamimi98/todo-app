import React from 'react'

function Header(props) {
  return (
    <div>

      <Navbar>
        <Navbar.Group align={Alignment.LEFT}>
          <Navbar.Heading>To-Do list</Navbar.Heading>
          <Navbar.Divider />
          <a href="/"><Button className="bp3-minimal" icon="home" text="Home" /></a>
          {/* <Button className="bp3-minimal" icon="document" text="Files" /> */}
        </Navbar.Group>
      </Navbar>


    </div>
  )
}

export default Header

