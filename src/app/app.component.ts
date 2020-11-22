import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from './services/auth-service.service';
import { FirebaseService } from './services/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'carcar';
  isSignedIn = false
  constructor(
    public firebaseService: FirebaseService,
    public authService: AuthServiceService
    ){}

  ngOnInit(){
    if(localStorage.getItem('user')!== null)
    this.isSignedIn= true
    else
    this.isSignedIn = false
  }
  async onSignup(email:string,password:string){
    await this.firebaseService.signup(email,password)
    if(this.firebaseService.isLoggedIn)
    this.isSignedIn = true
  }
  async onSignin(email:string,password:string){
    await this.firebaseService.signin(email,password)
    if(this.firebaseService.isLoggedIn)
    this.isSignedIn = true
  }
  handleLogout(){
    this.isSignedIn = false

  }

  ggLogin(){
    this.authService.doGoogleLogin().then(result=>{
      console.log(result)
    })
  }

  logout(){
    this.authService.logout()
  }

}
