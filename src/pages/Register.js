import React, {useState} from 'react'
import { Row , Col, Form , Button } from 'react-bootstrap'
import BG1 from '../video/bg1.mp4';

export default function Register() {
   
    const [variables, setVariables] = useState({
        email: '',
        username: '',
        password: '',
        confirmPassword: '',
      })
      
      const submitRegistrationForm = e=> {
      e.preventDefault()
      
      
      console.log(variables)
      }
      
    return (    
        <Row className = "bg-white py-5 justify-content-center">
        <Col sm={8} md={6} lg={4}>
          <h1 className ="text-center"> Register</h1>
          <Form onSubmit={submitRegistrationForm}>
            <Form.Group>
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" value={variables.email} onChange={e => setVariables({...variables, email: e.target.value })} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" value={variables.username} onChange={e => setVariables({...variables, username: e.target.value })}/>
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" value={variables.password} onChange={e => setVariables({...variables, password: e.target.value })} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" value={variables.confirmPassword} onChange={e => setVariables({...variables, confirmPassword: e.target.value })}/>
            </Form.Group>
            <div className = "text-center">
            <Button variant="success" type="submit">
              Submit
            </Button>
            </div>
          </Form>
        </Col>
        <video 
      id ="VidBG" autoPlay muted loop> <source src={BG1} type="video/mp4"/>
     </video>
      </Row>
      
    )}
