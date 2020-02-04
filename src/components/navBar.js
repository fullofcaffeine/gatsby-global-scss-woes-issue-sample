import React from "react"
import { Link } from "gatsby"
import { MdEmail } from 'react-icons/md';
import { FiCode } from 'react-icons/fi';

import { Navbar, Nav, Form, FormControl, Button, Container } from "react-bootstrap"

const CustomNavbar = ({ pageInfo }) => {
  return (
    <>
      <Navbar expand="sm">
        <Container>
        <Navbar.Brand href="#home">gatsby.global.css.woes <FiCode/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className='ml-auto'>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default CustomNavbar
