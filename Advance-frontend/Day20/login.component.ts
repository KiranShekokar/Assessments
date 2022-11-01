import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';

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

    constructor(private router:Router, private activatedrouter:ActivatedRoute) { }

    isValidUser():void
    {     

      var url:string = this.activatedrouter.snapshot.queryParams["returnUrl"];
      if(url == null){
          url = "/";
        }
      if(this.uid == "admin"  && this.pwd == "admin123")
      {
        sessionStorage.setItem("AUTH_TOKEN",this.uid); //created token
        this.router.navigate([url]);
        //this.color = "green";
        //this.result  = "Welcome to Admin";
        
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
    
 

  ngOnInit(): void {
  }


}
