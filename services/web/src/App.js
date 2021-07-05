import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
// internal
import { Routes } from './routes';

export default function App() {
  return (
    <Router>
        <Routes />
    </Router>
  );
}
