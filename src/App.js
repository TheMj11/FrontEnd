// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ShoppingListDetail from './ShoppingListDetail';

function App() {
  return (
    <Router>
      <div>
        <h1>Aplikace Nákupní Seznam</h1>
        <Switch>
          {/* Tato cesta zobrazí detail nákupního seznamu */}
          <Route path="/shopping-list/:id" component={ShoppingListDetail} />
          {/* Přidejte další routy zde, pokud budete potřebovat */}
          {/* Například, můžete mít domovskou stránku nebo další komponenty */}
          {/* <Route path="/" component={HomePage} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
