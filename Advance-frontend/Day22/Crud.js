import { useState } from "react";

function Crud(){
    var [empno,setEmpno]=useState("");
    var [empname,setEmpname]=useState("");
    var [depno,setDepno]=useState("");
    var [emparr,setEmparr] = useState([]);

    function getData(){
        setEmparr(
            [
                {empno:12345, ename: "Kiran" , depno:10},
                {empno:12346, ename: "Kiran1" , depno:20},
                {empno:12347, ename: "Kiran2" , depno:30},
                {empno:12348, ename: "Kiran3" , depno:40},
                {empno:12349, ename: "Kiran4" , depno:50},
                {empno:12343, ename: "Kiran5" , depno:20},
                {empno:12341, ename: "Kiran6" , depno:30},
                {empno:12342, ename: "Kiran7" , depno:80},

            ]
        )
    }
    function selectEmp(empnum){
        var x = emparr.find(item=>item.empno == empnum)
        setEmpno(x.empno);
        setEmpname(x.ename);
        setDepno(x.depno);
    }

    function updateData(){
        var x = emparr.findIndex(item=>item.empno == empno);
        var tempArr = Object.assign([],emparr)
        tempArr[x].empno = empno;
        tempArr[x].ename = empname;
        tempArr[x].depno = depno;
        setEmparr(tempArr)
    }
    function addData(){
        let tempArr = Object.assign([],emparr);
        var empObj = {};
        empObj.empno = empno;
        empObj.ename = empname;
        empObj.depno = depno;
        tempArr.push(empObj);
        setEmparr(tempArr);
    }
    function deleteEmp(empnum){
        var tempArr = Object.assign([],emparr);
        var x = emparr.findIndex(item=>item.empno == empnum);
        tempArr.splice(x,1);
        setEmparr(tempArr);
    }

    var result = emparr.map(item => {
        return <tr>
            <td>{item.empno}</td>
            <td>{item.ename}</td>
            <td>{item.depno}</td>
            <td><a href="javascript:void(0);" onClick={()=>selectEmp(item.empno)}>Select</a> | <a href="javascript:void(0);" onClick={()=>deleteEmp(item.empno)}>Delete </a></td>
        </tr>
    })

    return(
        <>
        <div style={{marginLeft:"10px"}}>
         <input value={empno} type="text" onChange={e=>setEmpno(e.target.value)} placeholder="Enter Employee Number"/><br/><br/>
         <input value={empname} type="text" onChange={e=>setEmpname(e.target.value)} placeholder="Enter Employee Name"/><br/><br/>
         <input value={depno} type="text" onChange={e=>setDepno(e.target.value)} placeholder="Enter Department Number"/><br/><br/>
         <input type="button" value="Get Employee" onClick={getData}/>
         <input type="button" value="Add Employee" onClick={addData}/>
         <input type="button" value="Update Details" onClick={updateData}/><br/><br/>
         <table border="2">
            <tr>
                <th>EmpNo</th>
                <th>EmpName</th>
                <th>DepNo</th>
                <th>Action</th>
            </tr>
            {result}
         </table>
        
         </div>
        </>
    )
}

export default Crud;