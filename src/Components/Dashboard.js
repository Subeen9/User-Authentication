import React, {useEffect, useState} from 'react';
import { useAuth } from '../context/AuthContext';
import { Container, Card, CardFooter, Button, Alert } from 'react-bootstrap';
import Mountain from '../assest/mountain.jpg';
import Profile from '../assest/profile.jpg';
import { useNavigate} from "react-router-dom"

function Dashboard() {
    const [error, setError] = useState('');
    const {logout,currentUser} = useAuth();
    const navigate = useNavigate();
    useEffect(()=>{
      if(currentUser){
        console.log(currentUser.email);
      }
    },[currentUser])

    async function handleLogOut(){
        console.log("called")
        setError('');
        try{
            await logout();
            navigate("/login")
            
        }
        catch(e){
            setError("Failed to logout")
            console.log('error', e)
        }
        
    }

  return (
    <>
      <Container fluid style={{ position: 'relative', margin: 0, padding: 0 }}>
      {error && <Alert style={{width: "200px", alignItems:"center"}} variant='danger'>{error}</Alert>}
      
        <img
          src={Mountain}
          alt="Mountain"
          style={{ width: '100%', height: '40vh', objectFit: 'cover', margin: 0, padding: 0 }}
        />

        <div
          style={{
            position: 'absolute',
            top: '94%', 
            left: '10%', 
            transform: 'translate(-50%, -50%)',
            borderRadius: '50%',
            overflow: 'hidden',
            width: '180px', 
            height: '180px',
          }}
        >
  
          <img src={Profile} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      </Container>

     
      <Container style={{marginTop:"10px",maxWidth:"400px"}}>
        <Card >
          <Card.Body >
          <h3 style={{textAlign: "center"}}>Welcome</h3>
         {currentUser && <p style={{textAlign:"center"}}>Email:{currentUser.email}</p>}
          </Card.Body>
        </Card>
        <CardFooter style={{textAlign:"center"}}>
           <Button variant='link' onClick={handleLogOut}>Logout</Button>
        </CardFooter>
      </Container>
    </>
  );
}

export default Dashboard;
