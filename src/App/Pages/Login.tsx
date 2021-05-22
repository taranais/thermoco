// eslint-disable-next-line no-use-before-define
import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import LoginComponent from '../../Components/Login/Login'

function Login () {
  return (
    <div>
      <Container fluid>
        <Row className="mt-5">
          <Col />
          <Col >
            <LoginComponent />
          </Col>
          <Col />
        </Row>
      </Container>
    </div>
  )
}

export default Login
