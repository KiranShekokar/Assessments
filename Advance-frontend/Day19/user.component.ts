import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
 userData:any[]=[];
  constructor(private httpObj:HttpClient) { 
  }
 
  public getUser(){
    let url = "https://reqres.in/api/users";
    this.httpObj.get(url).subscribe((response:any)=>
    {
      console.log(response.data);
      this.userData = response.data;
    });
  }
  
  ngOnInit(): void {
  }

}
