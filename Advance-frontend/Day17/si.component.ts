import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-si',
  templateUrl: './si.component.html',
  styleUrls: ['./si.component.css']
})
export class SiComponent implements OnInit {

  pamount:number = 0;
  rate:number = 0;
  time:number = 0;
  si:number =0;

  calculate():void{
    this.si = (this.pamount*this.rate*this.time)/100;
    //alert(this.si);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
