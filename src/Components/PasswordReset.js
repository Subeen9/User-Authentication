import React, {useRef, useState} from 'react';
import { Card, Button, Form, Alert} from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';
import{Link} from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function PasswordReset() {
    const {resetPassword} = useAuth();
    const[error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const emailRef = useRef();
    async function handleSubmit(e){
      e.preventDefault();
      console.log("function called");
      
      try {
      toast.success("check your email")
        setLoading(true);
        await resetPassword(emailRef.current.value);

      } catch(e) {
        console.log("Error", e)
        setError('Failed to Login');
        
      }
      
      setLoading(false);
      
    }
  
    return (
      <>
        <Card style={{maxWidth: "300px", margin: "auto", marginTop: "40px"}}>
          <Card.Title style={{textAlign:"center"}}>Password Reset</Card.Title>
  
          <Card.Body>
            {error && <Alert variant='danger'>{error}</Alert>}
              <Form>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control required placeholder="Email" type="email" ref={emailRef} size='sm'/>
            </Form.Group>
            </Form>
          </Card.Body>
          <Card.Footer style={{textAlign: "center"}}> <Link to="/login" >  LogIn </Link></Card.Footer>
          <ToastContainer/>
          <Button
  
    disabled={loading}
    variant="primary"
    style={{ margin: "auto" , marginTop: "10px", marginBottom: "10px"}}
    onClick={handleSubmit}
  >
    Reset Password
  </Button> 

        </Card>
      </>
    );
}

export default PasswordReset