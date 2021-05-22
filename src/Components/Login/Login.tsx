// eslint-disable-next-line no-use-before-define
import React from 'react'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Alert from 'react-bootstrap/Alert'

import { useLocation, useHistory } from 'react-router-dom'
import { Login as APILogin } from '../../services/api/Auth'
import { LoginFormHook } from './LoginFormHook'

function LoginComponent () {
  const login = {
    username: '',
    password: ''
  }

  const location = useLocation()
  const history = useHistory()
  const [showAlert, setShowAlert] = React.useState(false)

  // getting the event handlers from our custom hook
  const { onChange, onSubmit, values } = LoginFormHook(
    loginUserCallback,
    login
  )

  // a submit function that will execute upon form submission
  async function loginUserCallback () {
    try {
      await APILogin(values.username, values.password)
      history.push(location.pathname)
      const loc = window.location
      window.location = loc
    } catch (error: any) {
      setShowAlert(true)
    }
  }

  return (
    <>
     <Card style={{ width: '36rem' }}>
      <Card.Body>
        <Card.Title>Login</Card.Title>
        <Alert show={showAlert} variant='danger'>
            Login Failed
          </Alert>
        <Form onSubmit={onSubmit}>
          <Form.Group controlId="username">
            <Form.Label>User name</Form.Label>
            <Form.Control
                name='username'
                type="text"
                placeholder="Enter user name"
                onChange={onChange}
                required={true} />
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name='password'
              type="password"
              placeholder="Password"
              onChange={onChange}
              required={true} />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Card.Body>
    </Card>
    </>
  )
}

export default LoginComponent
