import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { useShoppingCart } from "../context/ShoppingCartContext"
export function Navbar() {
    const {openCart,cartQuantity} = useShoppingCart()
    return (
        <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
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
                {cartQuantity > 0 && (
                <Button onClick={openCart} style={{ width: "3rem", height: "3rem", padding: 0, position: "relative" }} variant="outline-primary"       className="rounded-circle">
                    <img style={{ width: "100%" }} src="https://cdn-icons-png.flaticon.com/128/4408/4408794.png" alt="" />
                    <div className=" bg-danger d-flex justify-content-center align-items-center rounded-circle" style={{color: "white" , width:"25px", position: "absolute", bottom: 0, right: 0, transform: "translate(25%, 25%)" }}>{cartQuantity}</div>
                </Button>)}
                
            </Container>
        </NavbarBs>
    )
}