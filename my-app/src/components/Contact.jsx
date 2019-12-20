import React from 'react';
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';
import './Contact.css';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="megaForm">
        <Form id="formContact">
          <h1 className="formTitle">Nous contacter</h1>
          <div className="formContact">
            <p className="fundacion"><span>Fundación Hidrógeno Aragón</span></p>
            <p>Parque tecnológico Walqa</p>
            <p>Ctra. N-330a, Km. 566</p>
            <p>22197 Huesca</p>
            <p><span>Email:</span> info@h2piyr.eu</p>
            <p><span>Téléphone:</span> +34 974 215 258</p>
          </div>
          <FormGroup>
            <Col sm={5}>
              <Label for="identity">Nom</Label>
              <Input type="name" name="name" id="identity" placeholder="Nom prénom" />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col sm={5}>
              <Label for="exampleEmail">Email</Label>
              <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col sm={5}>
              <Label for="exampleText">Message</Label>
              <Input type="textarea" name="text" id="exampleText" />
            </Col>
          </FormGroup>
          <Col sm={5} id="buttonForm">
            <Button color="primary">Envoyer</Button>
          </Col>
        </Form>
      </div>
    )
  }
}

export default Contact;