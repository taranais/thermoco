// import React from 'react'
import {
  User,
  Body_login_for_access_token_auth_login_post as UserLogin,
  // Token,
  AuthorizationService,
  OpenAPI
} from '../thermoco'

const {
  loginForAccessTokenAuthLoginPost
  , getAuthenticatedUserAuthMeGet
} = AuthorizationService

export const Login = async (username: string, password: string): Promise<User> => {
  const login : UserLogin = {
    username: username,
    password: password,
    scope: ''
  }
  const tokenValue = await loginForAccessTokenAuthLoginPost(login)
  localStorage.setItem('token', tokenValue.access_token)
  OpenAPI.TOKEN = tokenValue.access_token
  return await UserData()
}

export const UserData = async (): Promise<User> => {
  const user = await getAuthenticatedUserAuthMeGet()
  localStorage.setItem('user', JSON.stringify(user))
  return user
}

export const IsLogged = () => {
  const userData = localStorage.getItem('user')
  if (userData !== null) {
    const user = JSON.parse(userData)
    return user?.id !== -1
  } else {
    return false
  }
}

const getToken = async () => {
  const token = localStorage.getItem('token')
  if (token !== null) {
    return token
  } else {
    return ''
  }
}

OpenAPI.BASE = process.env.REACT_APP_API_ENDPOINT ? process.env.REACT_APP_API_ENDPOINT : 'http://127.0.0.1:8000'
OpenAPI.TOKEN = getToken
