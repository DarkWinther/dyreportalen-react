import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'nouislider/distribute/nouislider.css';
import './App.css';
import { Footer } from 'components/footer';

import { Header } from './components/header';
import { Kontakt } from 'pages/kontakt';
import { Home } from 'pages/home';
import { Annoncer } from 'pages/annoncer';
import { BeskedSendt } from 'pages/besked-sendt';

const NotFound = () => (
  <main>Error 404 - Vi kan ikke finde siden du leder efter</main>
);

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/kontakt" component={Kontakt} />
      <Route path="/annoncer" component={Annoncer} />
      <Route path="/beskedsendt" component={BeskedSendt} />
      <Route component={NotFound} />
    </Switch>
    <Footer />
  </BrowserRouter>
);

export default App;
