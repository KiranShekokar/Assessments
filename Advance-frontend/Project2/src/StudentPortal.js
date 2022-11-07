import {useState} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';

function StudentPortal(){
    const {id} = useParams();
    var [studObj,setStudObj] = useState({
        studentId : "",
        name: "",
        city: "",
        email : "",
        age: ""

    });
    let url = "http://localhost:3500/students/";
    axios.get(url + id).then(response=>{
        setStudObj(response.data);
    })
  return(
    <>
    <hr/>
     <div style={{border:"2px solid black",width:"50%",marginLeft:"25%"}}>
        <span>Student ID : {studObj.studentId}</span><br/>
        <span>Student Name : {studObj.name}</span><br/>
        <span>Student City : {studObj.city}</span><br/>
        <span>Student Email : {studObj.email}</span><br/>
        <span>Student Age : {studObj.age}</span><br/>
     </div> 
    </>
  )
}
export default StudentPortal