import {useState} from 'react';
import axios from "axios";
import { Link,Outlet } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

function Login(){
    var [email,setEmail] = useState("");
    var [password , setPassword] = useState("");
    var [result,setResult] = useState("");
    var StudentPortal = useNavigate();
    var url = "http://localhost:3500/students/";
    var index;

    function loginValidation(){
        axios.get(url).then(response=>{
            console.log(response.data)
       
        index = response.data.findIndex(item => item.email == email)
        //console.log(response.data[index].password);
        if(index == -1){
            setResult(<span><Link to="/Registrations" style={{color:"blue"}}>Click here</Link>,For Registration</span>);
            <Outlet/>

        }
        if(password == response.data[index].password){
            //setResult("success");
            StudentPortal("/StudentPortal/" + response.data[index].studentId);
        }
        else{
            setResult("Incorrect Password");
        }
    });
    }
 return(
    <>
    <hr/>
    <div style={{border:"2px solid gray",width:"50%",textAlign:"center",padding:"5%",marginLeft:"25%",borderRadius:"20px",borderTop:"10px solid darkgrey"}}>
    <fieldset>
        <legend>Student Login Form</legend>
        <input required value={email} className="form-control" onChange={e=>setEmail(e.target.value)} placeholder="Enter Email ID"/><br/>
        <input required value={password} className="form-control" onChange ={e=>setPassword(e.target.value)} placeholder="Enter Password"/><br/>
        <input type="button" onClick={loginValidation} className='btn btn-success' value="Login"/><br/><br/>
        <span>{result}</span>
    </fieldset>
    
    </div>
    </>
 )
}
export default Login;