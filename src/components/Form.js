import React, { Component } from "react";
import { Form, Button, Card } from "react-bootstrap";
import logo from "../assets/img/podcast.png";
import axios from 'axios';
import swal from '@sweetalert/with-react';

class EnvForm extends Component {

    constructor(props) {
        super(props)
        this.state = { image: '' }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(event) {

        event.preventDefault();

        let data = {
            image: this.state.image
        }

        axios.defaults.baseURL = 'api';
        axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
        await axios.post('/create/', data
        ).then(async (res) => {
            return {
                confirmed: await swal({
                    title: "Environment created",
                    text: "You environment was created successfully",
                    icon: "success",
                    button: "Open environment",
                }), url: res.data.url
            }
        }).then(data => {
            console.log(data)
            window.open("http://" + data.url, "_blank")
        }).catch(err =>
            alert(err)
        )
    }


    render() {
        return (
            <Card className="env-form">
                <Card.Header className="form-header">
                    <img alt="Podcast Logo" className="podcast-logo" src={logo} />
                    <h2>Create an environment</h2>
                </Card.Header>
                <Card.Body>
                    <Form className="form" onSubmit={this.handleSubmit}>
                        <Form.Group>
                            <Form.Label>Select a Docker Image</Form.Label>
                            <Form.Control value={this.state.image} onChange={(event) => { this.setState({ image: event.target.value }) }} required placeholder="Enter a docker image name" />
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
