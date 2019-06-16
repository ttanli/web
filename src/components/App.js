import React, { Component } from 'react';
import logo from '@/assets/logo.png';
import {
  Container,
  Dropdown,
  Image,
  Menu,
  Visibility,
} from 'semantic-ui-react';

const menuStyle = {
  border: 'none',
  borderRadius: 0,
  boxShadow: 'none',
  margin: 0,
  transition: 'box-shadow 0.5s ease, padding 0.5s ease',
}

const fixedMenuStyle = {
  backgroundColor: '#fff',
  border: '1px solid #ddd',
  boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',
}

class App extends Component {

  state = {
    menuFixed: false,
    overlayFixed: false,
  }



  render() {

    const { menuFixed, overlayFixed, overlayRect } = this.state
  

    return (
      <div className="App">
        <Visibility
          onBottomPassed={this.stickTopMenu}
          onBottomVisible={this.unStickTopMenu}
          once={false}
        >
          <Menu
            borderless
            fixed={menuFixed ? 'top' : undefined}
            style={menuFixed ? fixedMenuStyle : menuStyle}
          >
            <Container text>
              <Menu.Item onClick={ ()=> console.log('go to homepage')}>
                <Image size='mini' src={logo} />
              </Menu.Item>
              <Menu.Item header>天天安利 • 日报</Menu.Item>
              <Menu.Item header as='a'>Pricing</Menu.Item>
              <Menu.Item as='a'>Articles</Menu.Item>

              <Menu.Menu position='right'>
                <Dropdown text='More' pointing className='link item'>
                  <Dropdown.Menu>
                    <Dropdown.Item>List Item</Dropdown.Item>
                    <Dropdown.Item>List Item</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Header>Header Item</Dropdown.Header>
                    <Dropdown.Item>
                      <i className='dropdown icon' />
                      <span className='text'>Submenu</span>
                      <Dropdown.Menu>
                        <Dropdown.Item>List Item</Dropdown.Item>
                        <Dropdown.Item>List Item</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown.Item>
                    <Dropdown.Item>List Item</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Menu.Menu>
            </Container>
          </Menu>
        </Visibility>
      </div>
    );
  }
}

export default App;