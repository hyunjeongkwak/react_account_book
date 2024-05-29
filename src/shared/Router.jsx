import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Works from '../pages/Works';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Works/:id" element={<Works />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
