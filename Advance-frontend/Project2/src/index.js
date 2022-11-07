import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {Route, Outlet ,Routes, Link , BrowserRouter as Router} from 'react-router-dom';
import Login from './Login';
import About from './About';
import Registration from './Registration';
import Faculties from './Faculties';
import Details from './Details';
import Home from './Home';
import StudentPortal from './StudentPortal';

const routing = (
  <Router>
    <div style={{textAlign:"center",backgroundColor:"black",padding:"5px",border:"2px solid red"}}>
    <Link to="/"><img src="http://www.sts-school.edu.in/wp-content/uploads/2019/10/Best-School-in-Meerut-1.png" height="100" width="100"/></Link>
    <Link to="/"> Home </Link> 
    <Link to="/About"> About Us </Link> 
    <Link to="/Student"> Student Portal </Link> 
    <Link to="/Registrations"> Registration </Link> 
    <Link to="/Faculties"> Faculties </Link>
    <Link to="/Contact">Contact Us</Link>
    </div>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Student" element = {<Login/>}/>
      <Route path="/Registrations" element={<Registration/>}/>
      <Route path="/Faculties" element={<Faculties/>}/>
      <Route path="/Details/:id" element={<Details/>}/>
      <Route path="*"  element = { <NotFound /> }  />
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/StudentPortal/:id" element= {<StudentPortal/>} />
      <Route path="/Login" element= { <Login />  }>
          <Route index element= { <Login />  }  />
          <Route path="Registrations" element= { <Registration />  }  />
      </Route> 
    </Routes>
  </Router>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {routing}
  </React.StrictMode>
);

function NotFound(){
  return(
    <div align="center">
      <h3>Requested Page not found ,Please check URL</h3>              
    </div>

  )
}

function Contact(){
  return(
    <>
    <div style={{textAlign:"center", padding:"5%" , border:"2px solid black",margin:"20%",marginTop:"5px"}}>
      For Admissions : 020-99999 <br/>
      For Queries : 020-909090 <br/>
      Email : abc@school.com <br/>
    </div>
    </>
  )
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
