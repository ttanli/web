import React, {
  Component
} from 'react';
import logo from '@/assets/logo.png';
import {
  Alignment,
  Button,
  Navbar,
  InputGroup
} from "@blueprintjs/core";

class NavBar extends Component {

  render() {
    return ( 
      <Navbar>
        <Navbar.Group align={Alignment.LEFT}>
            <Navbar.Heading>天天安利 • 日报</Navbar.Heading>
        </Navbar.Group>
        <Navbar.Group align={Alignment.RIGHT}>
            <InputGroup
                leftIcon="search"
                placeholder="Search..."
                large
            />
            <Button className="bp3-minimal" icon="home" text="Home" />
            <Button className="bp3-minimal" icon="document" text="Files" />
        </Navbar.Group>
      </Navbar>
    )
  }

}

export default NavBar