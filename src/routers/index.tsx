import React from 'react'
import { App } from './app'
import { Auth } from './auth'

export const Router: React.FC = () => {
  const user = true;

  return user ? <App /> : <Auth />
}