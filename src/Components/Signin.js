import React, {useRef, useState} from 'react';
import { Card, Button, Form, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { ToastContainer, toast } from 'react-toastify';
function Signin() {
  const {signIn} = useAuth();
  const[error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  let navigate = useNavigate()
  async function handleSubmit(e){
    e.preventDefault();
    //console.log("function called");
    if(passwordRef.current.value !== confirmPasswordRef.current.value){
      return setError('The password does not matches');
    }
    if(passwordRef.current.value<6){
      return setError('Password too weak. Must be greater than 6 character')
    }
    try {
      setLoading(true);
     // console.log("email:", emailRef.current.value);
      //console.log("password:", passwordRef.current.value);
      await signIn(emailRef.current.value, passwordRef.current.value);
      toast.success("You are signed in")
      navigate("/")
    } catch(e) {
      console.log("Error", e)
      setError(' Unable to create account');
    }
    
    setLoading(false);
    
  }

  return (
    <>
      <Card style={{maxWidth: "300px", margin: "auto", marginTop: "40px"}}>
        <Card.Title style={{textAlign:"center"}}>Sign Up</Card.Title>

        <Card.Body>
          {error && <Alert variant='danger'>{error}</Alert>}
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
        <Card.Footer style={{textAlign: "center"}}>Already a Member?  <Link to= "/login"> Login </Link></Card.Footer>
        <Button

  disabled={loading}
  variant="primary"
  style={{maxWidth:"90px", margin: "auto" , marginTop: "10px", marginBottom: "10px"}}
  onClick={handleSubmit}
>
  Sign In
</Button>

        <ToastContainer/>
      </Card>
    </>
  );
}

export default Signin;
