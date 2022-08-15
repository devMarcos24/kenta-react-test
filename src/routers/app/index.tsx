import React from "react";
import { Route, Routes } from 'react-router-dom'
import Home from "../../pages/app/Home";
import { NewCoffee } from "../../pages/app/NewCoffee";

export const App: React.FC = () => (
  <Routes>
    <Route index={true as boolean} path="/" element={<Home />} />
    <Route index={true as boolean} path="/new-coffee" element={<NewCoffee />} />
  </Routes>
)