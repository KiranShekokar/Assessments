import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  public empid:number = 10256;
  public empname:string = "Scott";
  public job:string = "Manager";
  public dep:number = 10;

  constructor() {
    console.log("Added Successfully");
   }

  ngOnInit(): void {
  }

}
