import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  empArr:any[] = [
    {sno:1,ename:"Emp1",performace:1},
    {sno:2,ename:"Emp2",performace:2},
    {sno:3,ename:"Emp3",performace:3},
    {sno:4,ename:"Emp4",performace:4},
    {sno:5,ename:"Emp5",performace:1},
    {sno:6,ename:"Emp6",performace:2},
    {sno:7,ename:"Emp7",performace:3},
    {sno:8,ename:"Emp8",performace:4},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
