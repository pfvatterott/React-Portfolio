import React from "react";
import { Parallax } from 'react-materialize';
import CustomNavbar from './components/Navbar'
import background1 from './assets/images/background-1.png'
import 'materialize-css';
import './App.css';
import 'material-icons/iconfont/material-icons.css';

function App() {
  return (
    <div className="App">
      <CustomNavbar />
      <Parallax
        image={<img alt="" src={background1}/>}
        options={{
        responsiveThreshold: 0
        }}
      />
    </div>
  );
}

export default App;
