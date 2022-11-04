
import './App.css';
import Student from "./Student";
import React from 'react';
import logo from './logo.svg';
import Employees from "./Employees";
import Product from './Product';
import Crud from './Crud';
import Demo from './Demo';
import CrudAxios from './CrudAxios';

function App() {
  return (
    <>
   {/* <div style={{float:"left"}}>
    <img src = {logo} height="50" width="100"/>
    </div>
    <h1 align="center">REACT DEMO </h1>
    <hr/>
    <Student/><br/>
    <Employees /><br/>
    <Product /> 
    <Demo/>*/
  }
  <CrudAxios />
    </>
  );
}

export default App;
