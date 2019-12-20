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

      <Form id="formContact">

        <h1>Nous contacter</h1>
        <p id="explication">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
          et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      
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

        <FormGroup tag="fieldset">
          <Col sm={5}>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio1" />{' '}
                Je souhaite recevoir les actualités blabla
            </Label>
            </FormGroup>
          </Col>
        </FormGroup>

        <Col sm={5} id="buttonForm">
          <Button color="primary">Submit</Button>
        </Col>
        
      </Form>
    )
  }
}

export default Contact;