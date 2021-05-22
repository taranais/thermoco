// eslint-disable-next-line no-use-before-define
import React from 'react'

import logo from './logo.jpg'

import Image from 'react-bootstrap/Image'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { LinkContainer } from 'react-router-bootstrap'

function Header () {
  return (
  <Navbar bg="dark" variant="dark">
    <LinkContainer to="/">
      <Navbar.Brand>
      <Image
        alt=""
        src={logo}
        width="30"
        height="30"
        className="d-inline-block align-top"
        roundedCircle
      />
      {'   '}
      {process.env.REACT_APP_WEBSITE_NAME}
      </Navbar.Brand>
        </LinkContainer>
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer to="/">
              <Nav.Link >Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/sensors">
              <Nav.Link >Sensors</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
        </Navbar>
  )
}

export default Header
