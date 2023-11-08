import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap"
import { NavLink } from "react-router-dom"
export function Navbar() {
    return (
        <NavbarBs className="bg-white shadow-sm mb-3">
            <Container>
                <Nav className="me-auto">
                    <Nav.Link to="/" as={NavLink}>
                        Home
                    </Nav.Link>
                    <Nav.Link to="/store" as={NavLink}>
                        Store
                    </Nav.Link>
                    <Nav.Link to="/about" as={NavLink}>
                        About
                    </Nav.Link>
                </Nav>
                <Button style={{ width: "3rem", height: "3rem", padding: 0, position: "relative" }} variant="outline-primary"       className="rounded-circle">
                    <img style={{ width: "100%" }} src="https://cdn-icons-png.flaticon.com/128/4408/4408794.png" alt="" />
                    <div className=" bg-danger d-flex justify-content-center align-items-center" style={{borderRadius:"50%", width:"25px"}}>3</div>
                </Button>
            </Container>
        </NavbarBs>
    )
}