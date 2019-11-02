import React, { Component } from "react";
import { Form, Button, Card } from "react-bootstrap";
import logo from "../assets/img/podcast.png";

class EnvForm extends Component {
	render() {
		return (
			<Card className="env-form">
				<Card.Header className="form-header">
					<img alt="Podcast Logo" className="podcast-logo" src={logo} />
					<h2>Create an Environment</h2>
				</Card.Header>
				<Card.Body>
					<Form className="form">
						<Form.Group controlId="formBasicEmail">
							<Form.Label>Select an Docker Image</Form.Label>
							<Form.Control type="email" placeholder="Enter docker image" />
							<Form.Text className="text-muted">
							</Form.Text>
						</Form.Group>
						<Button className="button" variant="primary" type="submit">
                            Create
						</Button>
					</Form>
				</Card.Body>
			</Card>
		);
	}
}

export default EnvForm;