import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import { Container, Nav} from "react-bootstrap";
import "./style.css"
import useGlobalState from "../../useGlobal";

const Navigation = () => {
  const [state, dispatch] = useGlobalState()

  const handleNavbar = () => {
    console.log("ini di navbar", state)
    if(state.user===0){
        return (
          <div >
            <Navbar bg="dark" variant="dark">
              <Container>
                <Nav className="me-auto gap-3">
                  <Link to='/login'>Login</Link> 
                </Nav>
              </Container>
            </Navbar>
          </div>
        )
    }
    if(state.user===1){
      return (
        <div >
            <Navbar bg="dark" variant="dark">
              <Container>
                <Nav className="me-auto gap-3">
                  <Link to="/adminPage">Admin Page </Link> 
                </Nav>
              </Container>
            </Navbar>
          </div>
      )
    }
    if(state.user===2){
      return(
        <div >
            <Navbar bg="dark" variant="dark">
              <Container>
                <Nav className="me-auto gap-3">
                  <Link to="/userPage">User Page </Link> 
                </Nav>
              </Container>
            </Navbar>
          </div>
      )
    }
  }
  
  return(
    handleNavbar()
  )
};

export default Navigation
