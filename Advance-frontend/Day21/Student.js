
function Student(){

    var studentdetails = [
        {sid: 1 , sname:"Kiran" , course : "Angular" , age : 23},
        {sid: 2 , sname:"Kiran2" , course : "React" , age : 22},
        {sid: 3 , sname:"Kiran3" , course : "Angular" , age : 21},
        {sid: 4 , sname:"Kiran4" , course : "React" , age : 23},
        {sid: 5 , sname:"Kiran5" , course : "Angular" , age : 25}
    ];
    var output = studentdetails.map((detail,index) => {
        return <tr key="index" style={{backgroundColor: (index % 2 == 0)? "blue" : "red", color:"White"}}
           >
            <td >{detail.sid}</td>
            <td >{detail.sname}</td>
            <td >{detail.course}</td>
            <td >{detail.age}</td>
        </tr>
    })
    return <div>
          <table style={{border:"2px solid black",marginLeft:"30%"}} border="2" width="500">
            <tr style={ { backgroundColor:"lightgreen"}}>
                <th>SID</th>
                <th>SName</th>
                <th>SCourse</th>
                <th>SAge</th>
            </tr>
            {output}
          </table>
    </div>
}
export default Student;