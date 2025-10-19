import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import { createContext, useState } from 'react';
import Herosection from './herosection';

export const Usercontext = createContext();


function OffcanvasExample() {
  const expand = 'md';
  const [val, setval] = useState(false);
  const [name, setname] = useState('');
  const [log, setlog] = useState(false);

  


  return (
    <>
      <Navbar key={expand} expand={expand} className="mb-3" fixed='top' id="Nav">
          <Container className='w-100'>
            <Navbar.Brand href="#">
              <Image src="./logo.png" fluid />
            </Navbar.Brand>

            <Nav className="justify-content-center flex-grow-1 pe-3 d-none d-md-flex gap-md-5">
                  <Nav.Link href="#action1" className='navlink'>Home</Nav.Link>
                  <Nav.Link href="#action2" className='navlink'>Membership</Nav.Link>
                  <Nav.Link href="#action3" className='navlink'>Events</Nav.Link>
                  <Nav.Link href="#action4" className='navlink'>Contact</Nav.Link>
            </Nav>

            <div className="hamburger d-flex gap-3">
            <Button variant="outline-primary p-2 fs-md-2 " onClick={() => setval(!val)} className='in' disabled={log}>
              {log ? name : "Sign In"}
            </Button>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              className="d-flex d-md-none"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                <Navbar.Brand href="#">
                  <Image src="./logo.png" fluid />
                </Navbar.Brand>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className=''>
                <Nav className="justify-content-end flex-grow-1 pe-3 gap-md-5">
                  <Nav.Link href="#action1" className='navlink'>Home</Nav.Link>
                  <Nav.Link href="#action2" className='navlink'>Membership</Nav.Link>
                  <Nav.Link href="#action3" className='navlink'>Events</Nav.Link>
                  <Nav.Link href="#action4" className='navlink'>Contact</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            </div>
            
          </Container>
        </Navbar>

      <Usercontext.Provider value={{val, setval, setname, setlog}}>
        <Herosection/>
      </Usercontext.Provider>

      
    </>
  );
}

export default OffcanvasExample;