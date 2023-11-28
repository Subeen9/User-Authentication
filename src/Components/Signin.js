import React from 'react';
import { Card, Button, Form } from 'react-bootstrap';

function Signin() {
  return (
    <>
      <Card style={{maxWidth: "300px", margin: "auto", marginTop: "20px"}}>
        <Card.Title style={{textAlign:"center"}}>Sign Up</Card.Title>
        <Card.Body>
            <Form>
          <Form.Group className='mb-3' controlId="validationCustom01">
            <Form.Label>First Name</Form.Label>
            <Form.Control required placeholder="First Name" type="text" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Last Name</Form.Label>
            <Form.Control required placeholder="Last Name" type="text" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control required placeholder="Email" type="text" size='sm'/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control required placeholder="Password" type="text" />
          </Form.Group>
          </Form>
        </Card.Body>
        <Card.Footer style={{textAlign: "center"}}>Already a Member Login here</Card.Footer>
        <Button variant="primary" style={{maxWidth:"90px",margin: "auto" , marginTop: "10px", marginBottom: "10px"}}>SignIn</Button>
        
      </Card>
    </>
  );
}

export default Signin;
