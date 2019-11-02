import React, { PureComponent } from "react";
import { Container } from "react-bootstrap";
import EnvForm from "../components/Form";

class Home extends PureComponent {
	render() {
		return (
			<div className="home">
				<Container>
					<EnvForm></EnvForm>
				</Container>
			</div>
		);
	}
}

export default Home;