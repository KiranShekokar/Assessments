import {useState} from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

function Faculties(){
   var [result,setResult]  = useState("");
   var url = "http://localhost:3000/faculty/?_sort=facultyId&_order=asc";
   
   axios.get(url).then(response=>{
      // console.log(response.data)
        setResult(response.data.map(item=>{
           return <tr style={{margin:"5px"}}>
               <td>{item.facultyId}</td>
               <td style={{padding:"5px"}}><img src={item.imgurl} height="100" width="100" style={{borderRadius:"20px"}}/></td>
               <td>{item.fname}</td>
               <td>{item.specialisation}</td>
               <td>{item.Depno}</td>
               <td><Link to={"/Details/" + item.facultyId} ><img src="https://pluspng.com/img-png/iconmonstr-eye-6-icon-image-1459-512.png" height="30" width="30"/></Link></td>
           </tr>
       }))
   })
   return(
       <>
       <h3 align="center">Faculty List</h3><hr/>
       <div style={{border:"2px solid gray",margin:"20px",padding:"5%"}}>
       <table className="table table-striped table-dark">
           <tr>
               <th>Faculty ID</th>
               <th>Faculty Image</th> 
               <th>Faculty Name</th>
               <th>Faculty Specialisation</th>
               <th>Department No</th>
               <th>View</th>
           </tr>
           {result}
       </table>
       </div>
       </>
   )
}


export default Faculties



