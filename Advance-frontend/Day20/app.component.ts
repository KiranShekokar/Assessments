import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private router:Router){}
  public logout():any{
   sessionStorage.removeItem("AUTH_TOKEN");
   this.router.navigate(["/login"]);

  }
  title = 'projectAng1';
}
