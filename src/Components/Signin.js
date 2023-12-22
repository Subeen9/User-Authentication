import React, {useRef, useState} from 'react';
import { Card, Button, Form } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';
function Signin() {
  const {signIn} = useAuth();
  const[error, setError] = useState('');
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  function handleSubmit(e){
    e.preventDefault();
    if(passwordRef.current.value !== confirmPasswordRef.current.value){
      return setError('The password does not matches');
    }
    try{
      signIn(emailRef.current.value, passwordRef.current.value)
    }
    catch{
      setError('');
      setError("Unable to create an account")
    }
    
  }

  return (
    <>
      <Card style={{maxWidth: "300px", margin: "auto", marginTop: "40px"}}>
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
            <Form.Control required placeholder="Email" type="email" ref={emailRef} size='sm'/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control required placeholder="Password" type="password" ref={passwordRef} />
          </Form.Group>
          <Form.Group>
            <Form.Label> Confirm Password</Form.Label>
            <Form.Control required placeholder=" Confirm Password" type="password" ref={confirmPasswordRef} />
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
