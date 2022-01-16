import {  Button, Navbar, Nav,Container } from 'react-bootstrap'
import { Link } from "react-router-dom";
function Header() {
  
    return (
        <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand> <Link to="/">Alejandría</Link> </Navbar.Brand>
              <Button variant="outline-dark"><Link  to="/register">Registrar</Link></Button>
          </Container>
        </Navbar>
    </div>
  
    );
  }
  
  export default Header;