// eslint-disable-next-line no-use-before-define
import React from 'react'
import Header from '../Header'
import {
  useLocation
} from 'react-router-dom'

function NotFound () {
  const location = useLocation()
  return (
    <>
      <Header />
      <h2>404</h2>
      No match for <code>{location.pathname}</code>
    </>
  )
}

export default NotFound
