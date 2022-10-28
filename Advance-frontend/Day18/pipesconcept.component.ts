import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipesconcept',
  templateUrl: './pipesconcept.component.html',
  styleUrls: ['./pipesconcept.component.css']
})
export class PipesconceptComponent implements OnInit {

  public min:number=0;
  public max:number=4;
  public buttontype:boolean = false;

  userArr:any[] = [
    {uname:"User1" , uage:21, ucontact : 123456789},
    {uname:"User2" , uage:20, ucontact : 123456780},
    {uname:"User3" , uage:22, ucontact : 123456767},
    {uname:"User4" , uage:23, ucontact : 123456745},
    {uname:"User5" , uage:24, ucontact : 123456723},
    {uname:"User6" , uage:25, ucontact : 123456712},
    {uname:"User7" , uage:26, ucontact : 123456767},
    {uname:"User8" , uage:26, ucontact : 123456767},
    {uname:"User9" , uage:26, ucontact : 123456767},
    {uname:"User10" , uage:26, ucontact : 123456767},
    {uname:"User12" , uage:26, ucontact : 123456767},
    {uname:"User11" , uage:26, ucontact : 123456767},
  ];

  loadMore():void{
     this.max = this.max + 4;
     if(this.max>(this.userArr.length-1)){
       this.buttontype= true;
     }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
