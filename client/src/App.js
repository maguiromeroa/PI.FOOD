import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Landing from './dumb/landing/Landing';
import Home from './dumb/home/Home';
import Detail from './components/detail/Detail'
import CreateRecipe from './components/createRecipe/CreateRecipe';
import Error from './dumb/error404/Error'; 
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001'


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/recipe" component={CreateRecipe} />
        <Route exact path="/recipes/:id" component={Detail} />
        <Route path={'*'} component={Error} />
      </Switch>
    </div>
  );
}

export default App;