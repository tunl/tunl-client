import React, { Component } from "react";
import { Form, Button, Card } from "react-bootstrap";
import logo from "../assets/img/tunl.png";
import axios from 'axios';
import swal from '@sweetalert/with-react';

class EnvForm extends Component {

    constructor(props) {
        super(props)
        this.state = { image: '', password: '' }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(event) {

        event.preventDefault();

        let data = {
            image: this.state.image,
            password: this.state.password
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
            window.open("http://" + data.url, "_blank")
        }).catch(err =>
            swal({
                title: "Something went wrong",
                text: err.toString(),
                icon: "error"
            })
        )
    }


    render() {
        return (
            <Card className="env-form">
                <Card.Header className="form-header">
                    <img alt="tunl logo" className="tunl-logo" src={logo} />
                    <h2>Create an environment</h2>
                </Card.Header>
                <Card.Body>
                    <Form className="form" onSubmit={this.handleSubmit}>
                        <Form.Group>
                            <Form.Label>Docker Image</Form.Label>
                            <Form.Control value={this.state.image} onChange={(event) => { this.setState({ image: event.target.value }) }} placeholder="podcastsh/cast-sh:dev" />
                            <Form.Text className="text-muted">
                                Default: "podcastsh/cast-sh:dev"
                            </Form.Text>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" value={this.state.password} onChange={(event) => { this.setState({ password: event.target.value }) }} placeholder="admin" />
                            <Form.Text className="text-muted">
                                If not set, the default password will be "admin"
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
