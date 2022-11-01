import { Component, OnInit } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-students-crud',
  templateUrl: './students-crud.component.html',
  styleUrls: ['./students-crud.component.css']
})
export class StudentsCrudComponent implements OnInit {
  
  public studentArr:any[]=[];
  public studentId:number=0;
  public name:string="";
  public city:string="";
  public email:string="";
  public age:number=0;
  constructor(private studentObj:StudentsService) { }

  getStudent():any{
    this.studentObj.getStudent().subscribe((response:any)=>{
      this.studentArr = response;
    });
  }
 
  selectStudent(id:number):void{
    //alert("hi");
    this.studentObj.selectStudent(id).subscribe((response:any)=>{
      this.studentId = id;
      this.name = response.name;
      this.email =response.email;
      this.city = response.city;
      this.age = response.age;
    });
  }
  updateStudent(id:number):any{
   // alert(id);
    let studentObj1:any = {};
    studentObj1.studentId = id;
    studentObj1.name = this.name;
    studentObj1.email = this.email;
    studentObj1.city =this.city;
    studentObj1.age = this.age;
    
    this.studentObj.updateStudent_data(studentObj1).subscribe((response:any)=>{
      console.log(studentObj1);
      this.getStudent();
    })
   
    //return studentObj;
  }
  addStudent():any{
    let newStudent:any = {};
    newStudent.name=this.name;
    newStudent.email = this.email;
    newStudent.city = this.city;
    newStudent.age = this.age;
    this.studentObj.addStudent(newStudent).subscribe((response:any)=>{
      //alert("Added");
      this.getStudent();
    });
    
  }
 
  deleteStudent(id:number):any{
    this.studentObj.deleteStudent_Data(id).subscribe((response:any)=>{
      this.getStudent();
    })
  }
  clearStudent():any{
    this.name="";
    this.email="";
    this.city = "";
    this.age = 0;
  }
 

  ngOnInit(): void {
  }

}
