import React, {useRef, useState} from 'react';
import { Card, Button, Form, Alert } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';
import{Link, useNavigate} from "react-router-dom"
import { ToastContainer,toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
function Login() {
    const {login} = useAuth();
    const[error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const emailRef = useRef();
    const passwordRef = useRef();
    var navigate =useNavigate();
    async function handleSubmit(e){
      e.preventDefault();
     // console.log("function called");
      
      try {
        setLoading(true);
        console.log("email:", emailRef.current.value);
        console.log("password:", passwordRef.current.value);
        toast.success("You are signed in")
        await login(emailRef.current.value, passwordRef.current.value);
        navigate("/");

      } catch(e) {
        console.log("Error", e)
        setError('Failed to Login');
        
      }
      
      setLoading(false);
      
    }
  
    return (
      <>
        <Card style={{maxWidth: "300px", margin: "auto", marginTop: "40px"}}>
          <Card.Title style={{textAlign:"center"}}>Login</Card.Title>
  
          <Card.Body>
            {error && <Alert variant='danger'>{error}</Alert>}
              <Form>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control required placeholder="Email" type="email" ref={emailRef} size='sm'/>
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control required placeholder="Password" type="password" ref={passwordRef} />
            </Form.Group>
            </Form>
            <Form.Group style={{textAlign:"center", marginTop: "10px"}}><Link to ="/changePassword" >Forgot Password?</Link></Form.Group>
          </Card.Body>
          <Card.Footer style={{textAlign: "center"}}>New Member? <Link to="/signin" >  Sign In </Link></Card.Footer>
          <Button
  
    disabled={loading}
    variant="primary"
    style={{maxWidth:"90px", margin: "auto" , marginTop: "10px", marginBottom: "10px"}}
    onClick={handleSubmit}
  >
   Login
  </Button> 
        </Card>
        <ToastContainer/>
      </>
    );
}

export default Login