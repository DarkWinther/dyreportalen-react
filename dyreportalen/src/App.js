import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

import { Header } from './components/header';

const App = () => (
  <BrowserRouter>
    <Header></Header>
  </BrowserRouter>
);

export default App;
