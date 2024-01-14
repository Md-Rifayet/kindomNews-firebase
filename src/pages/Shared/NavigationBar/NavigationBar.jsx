import React, { useContext } from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../../providers/AuthProvidr';

const NavigationBar = () => {
    const {user, logout} = useContext(AuthContext);
  return (
    <Container>
           <Navbar expand="lg" className="bg-body-tertiary mt-1">
       <Container>
     
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            
            <Link to='/'>Home</Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/about">Career</Nav.Link>
          </Nav>
          <Nav>
          { user && <FaUserCircle  style={{fontSize: '2rem'}}></FaUserCircle>}
           
               {user ?
                <Button onClick={logout} variant="secondary">Logout</Button>:
                <Link to='/login'>
                     <Button variant="secondary">Login</Button>
                </Link>
                 }
            
          </Nav>
        </Navbar.Collapse>
      </Container>
  </Navbar>
    </Container>
  )
}

export default NavigationBar