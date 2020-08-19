import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../assets/img/tunl_typo.png";

class Header extends Component {
	render() {
		return (
			<Navbar className="navbar" collapseOnSelect expand="lg" bg="light" variant="light">
				<Navbar.Brand className="tunl" href="/">
					<img alt="tunl logo" src={logo}/>
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