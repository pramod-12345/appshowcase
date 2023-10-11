import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './index.css';

function NavBarComponent() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary main-nav " >
      <Container>
        <Navbar.Brand className='nav-header' href="/">Project Demonstration</Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='nav-items' href="/">Home</Nav.Link>
            {/* <Nav.Link className='nav-items' href="#link">Link</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarComponent;