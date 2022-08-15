import React from "react";
import { BrowserRouter, Route } from 'react-router-dom'

const Home: React.FC = () => {
  return (
    <div>
      <strong>
        testando
      </strong>
    </div>
  )
}

export const Auth: React.FC = () => {
  return (
    <BrowserRouter>
      <Route index={true as boolean} path="/" element={<Home />} />
    </BrowserRouter>
  )
}