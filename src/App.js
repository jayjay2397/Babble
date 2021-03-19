import React from 'react';
import {Card,Container , Row , Col, Form , Button } from 'react-bootstrap'
import BG1 from './video/bg1.mp4';


import './App.scss';

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <h1> Register</h1>
          <Form>
            <Form.Group>
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" />
            </Form.Group>
            <div className = "text-center">
            <Button variant="success" type="submit">
              Submit
            </Button>
            </div>
          </Form>
        </Col>
      </Row>
      <video 
             id ="VidBG" autoPlay muted loop> <source src={BG1} type="video/mp4"/>
            </video>
    </Container>
  );
}

export default App;
