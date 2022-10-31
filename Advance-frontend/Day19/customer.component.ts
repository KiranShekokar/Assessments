import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {

  customerdata:any[]=[];

  constructor(private httpObj:HttpClient) { }
  public getData(){
    let url = "https://www.w3schools.com/angular/customers.php";
    this.httpObj.get(url).subscribe((response:any)=>{
      this.customerdata = response.records;
      console.log(response.records);
    });
  }
  

}
