import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
// import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
    return (
        <>
            <Navbar
                collapseOnSelect
                expand="lg"
                bg="dark"
                variant="dark"
                sticky="top"
            >
                <Container>
                    <Navbar.Brand as={HashLink} to="/home#home">
                        Mazharul Islam Mamun
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link as={HashLink} to="/home#home">
                                Home
                            </Nav.Link>
                            <Nav.Link as={HashLink} to="/home#projects">
                                MY Projects
                            </Nav.Link>
                            <Nav.Link as={HashLink} to="/home#contact">
                                Contact Me
                            </Nav.Link>
                            <Nav.Link as={HashLink} to="/home#about">
                                About
                            </Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link
                                target="_black"
                                href="https://drive.google.com/file/d/1x2bCfCpcvaEhTr9OqTzki6dAsPSaaP8r/view?usp=sharing"
                            >
                                Download Resume
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
