import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";


class Header extends Component {
	render() {
		return (
			<Navbar className="navbar" collapseOnSelect expand="lg" bg="light" variant="light">
				<Navbar.Brand className="podcast" href="/">
					<span>POD</span>
                    CAST
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
					<Nav>
						<Nav.Link href="/">Home</Nav.Link>
						<Nav.Link href="envs">Environments</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}

export default (Header);