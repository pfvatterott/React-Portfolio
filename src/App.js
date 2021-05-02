import React from "react";
import Home from "./pages/home"
import Languages from "./pages/languages"
import Portfolio from "./pages/portfolio"
import { Switch, Route } from 'react-router-dom'
import CustomNavbar from './components/Navbar'
import CustomFooter from "./components/Footer"
import 'materialize-css';
import './App.css';
import 'material-icons/iconfont/material-icons.css';

function App() {
  return (
    <div className="App">
      <CustomNavbar />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/languages" component={Languages}/>
        <Route exact path="/portfolio" component={Portfolio}/>
      </Switch>
      <CustomFooter />
    </div>
  );
}

export default App;
