import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Formu = (props) => {
  return (
    <Form>
       <FormGroup>
        <Label for="identity">Name</Label>
        <Input type="name" name="name" id="identity" placeholder="Nom prénom" />
      </FormGroup>

      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
      </FormGroup>
     
      <FormGroup>
        <Label for="exampleText">Text Area</Label>
        <Input type="textarea" name="text" id="exampleText" />
      </FormGroup>
     
      <FormGroup tag="fieldset">
        <legend>Radio Buttons</legend>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" />{' '}
            Je souhaite recevoir les actualités blabla
          </Label>
        </FormGroup>
   
      </FormGroup>

      <Button>Submit</Button>
    </Form>
  );
}

export default Formu;
