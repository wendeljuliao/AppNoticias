import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Cabecalho from './components/Cabecalho';

import Contato from './paginas/Contato';
import Home from './paginas/Home';
import Pagina404 from './paginas/Pagina404';
import Sobre from './paginas/Sobre';

function App() {
  return (
    <Router>
      <Cabecalho />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/sobre">
          <Sobre />
        </Route>
        <Route path="/contato">
          <Contato />
        </Route>
        <Route>
          <Pagina404 />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
