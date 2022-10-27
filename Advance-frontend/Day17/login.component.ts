import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent 
{
    uid:string  = "";
    pwd:string  = "";
    result:string  = "";
    isButtonDisable = false;
    count:number = 0;
    color:string ="";

    isValidUser():void
    {     
      if(this.uid == "admin"  && this.pwd == "admin123")
      {
        this.color = "green";
        this.result  = "Welcome to Admin";
        
      }
      else
      {
        this.count++;
        this.color = "red";
        this.result  = "Invalid user id or password";
       
       //alert(this.color);
        if(this.count == 3)
        {
          this.isButtonDisable = true;
        }

      }
    }
}
