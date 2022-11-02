
import './App.css';
import Student from "./Student";
import React from 'react';
import logo from './logo.svg';
import Employees from "./Employees";

function App() {
  return (
    <>
    <img src = {logo} height="100" width="100"/>
    <h1 align="center">REACT DEMO </h1><hr/>
    <Student/>
    <Employees />
    </>
  );
}

export default App;
