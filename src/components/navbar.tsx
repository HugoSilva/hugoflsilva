'use client'

import {useEffect} from "react";
import {useLenis} from "lenis/react";
import 'lenis/dist/lenis.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavbarWidget() {

    const lenis = useLenis();

    useEffect(() => {
        function raf(time: number) {
            lenis?.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
    }, [lenis]);

    function scrollTo(section: string): void {
        lenis?.scrollTo(section, {offset: -90})
    }

    return (
        <header className="top-area">
            <div className="header-area">
                <Navbar expand="lg" fixed="top"
                        className="navbar navbar-default bootsnav navbar-fixed dark no-background" collapseOnSelect
                        style={{position: "fixed", top: 0, right: 0, left: 0, zIndex: 1030}}>
                    <Container className="container">
                        <div className="navbar-header">
                            <Navbar.Brand className="navbar-brand"
                                          onClick={() => scrollTo("#page-top")} as="a">HugoflSilva</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        </div>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="nav navbar-nav navbar-right" as="ul">
                                <Nav.Item as="li" onClick={() => scrollTo("#about")}>
                                    <Nav.Link>about</Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li" onClick={() => scrollTo("#skills")}>
                                    <Nav.Link>skills</Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li" onClick={() => scrollTo("#experience")}>
                                    <Nav.Link>experience</Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li" onClick={() => scrollTo("#profiles")}>
                                    <Nav.Link>tech</Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li" onClick={() => scrollTo("#portfolio")}>
                                    <Nav.Link>portfolio</Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li" onClick={() => scrollTo("#contact")}>
                                    <Nav.Link>contact</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            <div className="clearfix"></div>
        </header>
    );
}