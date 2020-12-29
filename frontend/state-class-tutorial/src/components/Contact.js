import React, { Component } from "react";
// import 'bootstrap-css-only/css/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FiSend } from 'react-icons/fi';
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
class Contact extends Component {
    render() {
        return (
            <div>
                <h2>Formularz kontaktowy</h2>
                <Form>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Imię</Form.Label>
                        <Form.Control placeholder="" />
                    </Form.Group>
                {/*    <Form.Group controlId="exampleForm.ControlInput1">*/}
                {/*        <Form.Label>Nazwisko</Form.Label>*/}
                {/*        <Form.Control placeholder="" />*/}
                {/*    </Form.Group>*/}
                {/*    <Form.Group controlId="exampleForm.ControlInput1">*/}
                {/*        <Form.Label>Adres e-mail</Form.Label>*/}
                {/*        <Form.Control type="email" placeholder="name@example.com" />*/}
                {/*    </Form.Group>*/}
                {/*    <Form.Group controlId="exampleForm.ControlInput1">*/}
                {/*        <Form.Label>Temat</Form.Label>*/}
                {/*        <Form.Control placeholder="" />*/}
                {/*    </Form.Group>*/}
                {/*    <Form.Group controlId="exampleForm.ControlTextarea1">*/}
                {/*        <Form.Label>Wiadomość</Form.Label>*/}
                {/*        <Form.Control as="textarea" rows={3} />*/}
                {/*    </Form.Group>*/}
                {/*    <Button  variant="primary" type="submit">*/}
                {/*        Submit*/}
                {/*        <FiSend/>*/}
                {/*    </Button>*/}
                </Form>
            </div>
        );
    }
}

export default Contact;