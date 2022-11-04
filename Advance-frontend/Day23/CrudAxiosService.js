import axios from "axios";

let studentObj = {};

let url = "http://localhost:3509/students/";

studentObj.getStudentData = function(){
    return axios.get(url + "?_sort=studentId&_order=asc");
}
studentObj.getThisStudent = function(id){
    return axios.get(url+id);
}
studentObj.addStudent = function(studentaddObj){
    return axios.post(url,studentaddObj);
}
studentObj.deleteStudent = function(studid){
    return axios.delete(url+studid);
}
studentObj.updateStudent = function(studentupdateObj){
    return axios.put(url+studentupdateObj.studentId , studentupdateObj);
}

export default studentObj;