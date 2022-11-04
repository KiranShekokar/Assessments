import { useState } from "react";
import studentObj from "./CrudAxiosService";

function CrudAxios(){

    let [studentArray,setStudentArray] = useState([]);
    let [studentid,setStudentid] = useState("");
    let [studentname,setStudentname] = useState("");
    let [studentcity,setStudentcity] = useState("");
    let [studentemail,setStudentemail] = useState("");
    let [studentage,setStudentage] = useState("");

    function getStudent(){
        studentObj.getStudentData().then(response =>{
            setStudentArray(response.data);
           console.log(response)
        })
    }
    function selectStudent(studid){
        studentObj.getThisStudent(studid).then(response =>{
            setStudentid(response.data.studentId);
            setStudentname(response.data.name);
            setStudentcity(response.data.city);
            setStudentemail(response.data.email);
            setStudentage(response.data.age);
        })
    }
    function addStudent(){
        let studentnewObj = {}
        studentnewObj.studentId = studentid;
        studentnewObj.name = studentname;
        studentnewObj.city = studentcity;
        studentnewObj.email = studentemail;
        studentnewObj.age = studentage;

        studentObj.addStudent(studentnewObj).then(response=>{
            alert("New Student Added Successfully!");
            getStudent();
        })

    }

    function updateStudent(){
        let studentnewObj = {}
        studentnewObj.studentId = studentid;
        studentnewObj.name = studentname;
        studentnewObj.city = studentcity;
        studentnewObj.email = studentemail;
        studentnewObj.age = studentage;

        studentObj.updateStudent(studentnewObj).then(response=>{
        getStudent();
        })
    }
    function deleteStudent(studid){
        studentObj.deleteStudent(studid).then(response=>{
            alert("Student details deleted successfully!")
            getStudent();
        })
    }

    let result = studentArray.map(item=>{
        return <tr>
            <td>{item.studentId}</td>
            <td>{item.name}</td>
            <td>{item.city}</td>
            <td>{item.email}</td>
            <td>{item.age}</td>
            <td><a href="javascript:void(0);" onClick={()=>selectStudent(item.studentId)}>Select</a> | <a href="javascript:void(0);" onClick={()=>deleteStudent(item.studentId)}>Delete </a></td>
        </tr>
    })
    return(
        <div style={{margin:"50px"}}>
        <h2>CRUD Using AXIOS</h2><hr/>
        <input value={studentid} onChange={e => setStudentid(e.target.value) } placeholder="Enter Student ID"/>
        <br/><br/>
        <input value={studentname} onChange={e => setStudentname(e.target.value) } placeholder="Enter Student Name"/>
        <br/><br/>
        <input value={studentcity} onChange={e => setStudentcity(e.target.value) } placeholder="Enter Student City"/>
        <br/><br/>
        <input value={studentemail} onChange={e => setStudentemail(e.target.value) } placeholder="Enter Student Email"/>
        <br/><br/>
        <input value={studentage} onChange={e => setStudentage(e.target.value) } placeholder="Enter Student Age"/>
        <br/><br/>
        <input type="button" onClick={getStudent} value="Get Students Detail"/>
        <input type="button" onClick={addStudent} value="Add Student"/>
        <input type="button" onClick={updateStudent} value="Update Student Details"/><br/><br/>
        <table border="2" className="table" style={{padding:"20px"}}>
            <tr>
                <th>Student ID</th>
                <th>Student Name</th>
                <th>Student City</th>
                <th>Student Email</th>
                <th>Student Age</th>
                <th>Action</th>
            </tr>
        {result}
        </table>
        </div>
    )
}

export default CrudAxios;
