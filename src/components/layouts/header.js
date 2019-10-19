import React, { useState } from 'react'
import Link from 'next/link'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem
} from 'reactstrap';

function Header(props) {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const {pathname} = props;
    return (
        <header>
            <Navbar className="navbar fixed-top navbar-expand-lg navbar-dark bg-primary" >
                <Link href="/">
                    <a className="navbar-brand">Mersock</a>
                </Link>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem className={pathname=='/'?'active':null}>
                            <Link href="/">
                                <a className="nav-link">Home</a>
                            </Link>
                        </NavItem>
                        <NavItem className={pathname=='/posts'?'active':null}>
                            <Link href="/posts">
                                <a className="nav-link">Posts</a>
                            </Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </header>
    )
}

export default Header
