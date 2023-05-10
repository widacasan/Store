import React from 'react';
import LoginForm from './components/LoginForm';
import TopBar from './components/TopBar'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



function App() {
  return (
   
      <Router>
        <Switch>
          <Route exact path="/">
            <LoginForm />
          </Route>
          <Route path="/topbar">
            <TopBar />
          </Route>
        </Switch>
      </Router>
    );
  }
  

export default App;

