import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { useShoppingCart } from "../context/ShoppingCartContext"

export function Navbar() {
    const { openCart, cartQuantity } = useShoppingCart()
    return (
        <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
            <Container>
                <Nav className="me-auto">
                    <Nav.Link to='/' as={NavLink}>Home</Nav.Link>
                    <Nav.Link to='/store' as={NavLink}>Store</Nav.Link>
                    <Nav.Link to='/about' as={NavLink}>About</Nav.Link>
                </Nav>
                {cartQuantity >= 0 && (
                    <Button
                        onClick={openCart}
                        style={{ width: '3rem', height: '3rem', position: 'relative' }}
                        variant="outline-primary"
                        className="rounded-circle">
                        <svg version="1.1" id="Layer_1"
                            // height="1.5rem" width="1.5rem" -- To adjust the cart size
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 430.208 430.208" fill="blue">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <circle cx="306.4" cy="363.104" r="32"></circle>
                                <path d="M306.4,403.104c-22,0-40-18-40-40s18-40,40-40s40,18,40,40S328.4,403.104,306.4,
                            403.104z M306.4,339.104c-13.2,0-24,10.8-24,24s10.8,24,24,24s24-10.8,24-24S319.6,339.104,
                            306.4,339.104z"></path>
                                <circle cx="162.4" cy="363.104" r="32"></circle>
                                <path d="M162.4,403.104c-22,0-40-18-40-40s18-40,40-40s40,18,40,40S184.4,403.104,162.4,
                            403.104z M162.4,339.104c-13.2,0-24,10.8-24,24s10.8,24,24,24s24-10.8,24-24S175.6,339.104,
                            162.4,339.104z"></path>
                                <path d="M74.4,91.104h332.4c11.2,0,18.8,11.2,14.8,21.6l-63.6,166c-4.8,12.4-16.8,20.4-30,
                            20.4H140.8 c-15.2,0-28.4-10.8-31.6-26L74.4,91.104z"></path>
                                <g>
                                    <path d="M328,307.104H140.8c-18.8,0-35.6-13.6-39.6-32.4l-34.8-182c-0.4-2.4,0-4.8,
                                1.6-6.4 c1.6-2,3.6-2.8,6-2.8h332.4c8,0,15.2,4,19.6,10.4c4.4,6.4,5.6,14.8,2.4,22l-63.6,
                                166C359.6,296.704,344.4,307.104,328,307.104z M84,99.104l32.8,172.4c2.4,11.2,12.4,19.6,
                                23.6,19.6h187.2c10,0,19.2-6,22.4-15.2l63.6-166c0.8-2.4,0.8-5.2-0.8-7.2 c-1.6-2-4-3.
                                2-6.4-3.2H84V99.104z"></path>
                                    <path d="M74,99.104c-3.6,0-7.2-2.8-8-6.4l-6-30.4c-2-11.2-12-19.2-23.2-19.2H8c-4.4,0-8
                                -3.6-8-8s3.6-8,8-8 h28.8c19.2,0,35.6,13.6,39.2,32l6,30.4c0.8,4.4-2,8.4-6.4,9.2C75.2,99
                                .104,74.4,99.104,74,99.104z"></path>
                                </g>
                                <path d="M386.8,139.104H90.4l-8-40h332l-4,20.8C408,131.104,398,139.104,386.8,139.104z"></path>
                                <g>
                                    <path d="M330,147.104h-12c-4.4,0-8-3.6-8-8s3.6-8,8-8h12c4.4,0,8,3.6,8,8S334.4,147.104,
                                330,147.104z"></path>
                                    <path d="M282,147.104H86.4c-4.4,0-8-3.6-8-8s3.6-8,8-8H282c4.4,0,8,3.6,8,8S286.4,147.104,
                                282,147.104z"></path>
                                </g>
                            </g>
                        </svg>
                        <div
                            className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                            style={{
                                color: 'white',
                                width: '1.5rem',
                                height: '1.5rem',
                                position: 'absolute',
                                bottom: 0,
                                right: 0,
                                transform: 'translate(25%, 25%)'
                            }}>
                            {cartQuantity}
                        </div>
                    </Button>
                )}
            </Container>
        </NavbarBs>
    )
}