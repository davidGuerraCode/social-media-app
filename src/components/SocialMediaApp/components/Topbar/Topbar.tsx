import * as React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';

interface Props {
  username?: string;
}
const Topbar: React.FC<Props> = ({ username }) => {
  return (
    <Navbar
      expand="lg"
      bg="dark"
      variant="dark"
      className="justify-content-between">
      <Navbar.Brand>
        <Link to="/" className="text-white text-decoration-none">
          Social-Media-App
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      {/* <Navbar.Collapse id="responsive-navbar-nav"> */}
      <Nav>
        <Nav.Link>
          <NavLink
            to="/login"
            className="text-white text-decoration-none"
            activeClassName="custom-active">
            Login
          </NavLink>
        </Nav.Link>
        <Nav.Link>
          <NavLink
            to="/signup"
            className="text-white text-decoration-none"
            activeClassName="custom-active">
            Signup
          </NavLink>
        </Nav.Link>
        <Nav.Link>Logout</Nav.Link>
      </Nav>
      {/* </Navbar.Collapse> */}
    </Navbar>
  );
};

export default Topbar;
