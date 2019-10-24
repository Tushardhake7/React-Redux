import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './menu/menu';
import Footer from './menu/footer';
import Fruits from './components/Fruits2';
import Animal from './components/Animal';
import Home from './components/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App(props) {

  return (
    <BrowserRouter>
    <div>
      <Menu/>
      <Switch>
      <Route path="/" exact component = { Home } />
      <Route path="/fruits" component = { Fruits } />
      <Route path="/animal" component = { Animal } />
      </Switch>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
