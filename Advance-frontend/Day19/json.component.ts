import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-json',
  templateUrl: './json.component.html',
  styleUrls: ['./json.component.css']
})
export class JsonComponent implements OnInit {

  employeeData:any;

  constructor(private httpObj:HttpClient) { }
  getData(){
    let url = "http://localhost:3000/employee_data";
    this.httpObj.get(url).subscribe((response)=>{
      console.log(response);
      this.employeeData = response
    })
  }

  ngOnInit(): void {
  }

}
